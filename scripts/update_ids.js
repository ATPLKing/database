const fs = require('fs').promises;
const path = require('path');


// Fonction pour parcourir récursivement les dossiers
async function findQuestionsFiles(dir) {
    const files = [];
    
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            
            if (entry.isDirectory()) {
                // Récursion dans les sous-dossiers
                const subFiles = await findQuestionsFiles(fullPath);
                files.push(...subFiles);
            } else if (entry.name === 'questions.json') {
                files.push(fullPath);
            }
        }
    } catch (err) {
        console.warn(`Impossible de lire le dossier ${dir}:`, err.message);
    }
    
    return files;
}

// Fonction pour mettre à jour les IDs dans un fichier
async function updateQuestionIds(filePath) {
    try {
        
        const data = await fs.readFile(filePath, 'utf8');
        const questions = JSON.parse(data);
        
        if (!Array.isArray(questions) || questions.length === 0) {
            return;
        }
        
        let idCounter = 1;
        
        const updatedQuestions = questions.map(q => {
            // Validation des propriétés requises
            if (!q.subtopic) {
                console.warn(`⚠️  Question manquante database/subtopic dans ${filePath}:`, q);
                return q;
            }
            
            const newId = `${q.subtopic.split('-')[0]}${String(idCounter).padStart(4, '0')}`;
            q.id = newId;
            idCounter++;
            return q;
        });
        
        await fs.writeFile(filePath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
        console.log(`✅ Mis à jour ${updatedQuestions.length} questions dans ${path.basename(path.dirname(filePath))}/questions.json`);
        
    } catch (err) {
        console.error(`❌ Erreur lors du traitement de ${filePath}:`, err.message);
    }
}

// Fonction principale
async function main() {
    const jsonDir = path.join(__dirname, '..', 'json');
    
    try {
        console.log(`🚀 Recherche des fichiers questions.json dans: ${jsonDir}\n`);
        
        const questionsFiles = await findQuestionsFiles(jsonDir);
        
        if (questionsFiles.length === 0) {
            console.log('❌ Aucun fichier questions.json trouvé');
            return;
        }
        
        console.log(`📋 ${questionsFiles.length} fichier(s) questions.json trouvé(s):\n`);
        
        // Traitement de tous les fichiers
        for (const filePath of questionsFiles) {
            await updateQuestionIds(filePath);
        }
        
        console.log('\n🎉 Traitement terminé !');
        
    } catch (err) {
        console.error('❌ Erreur générale:', err.message);
    }
}

main();