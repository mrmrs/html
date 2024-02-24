const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIAPI } = require('@openai/openai-api');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Initialize OpenAI API with your API key
const openaiApiKey = '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'; // Replace 'YourApiKeyHere' with your actual OpenAI API key
const openai = new OpenAIAPI(openaiApiKey);

app.post('/generate-recipe', async (req, res) => {
    const { ingredients } = req.body;

    // Validate ingredients
    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
        return res.status(400).json({ error: 'Invalid ingredients format' });
    }

    // Use OpenAI API to generate a recipe based on ingredients
    const prompt = `Create a recipe using the following leftover ingredients:\n${ingredients.join(', ')}`;
    try {
        const response = await openai.createCompletion({
            engine: 'text-davinci-002',
            prompt,
            max_tokens: 150,
            n: 1
        });

        const recipe = response.choices[0].text.trim();
        res.json({ recipe });
    } catch (error) {
        console.error('Error generating recipe:', error);
        res.status(500).json({ error: 'Failed to generate recipe' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
