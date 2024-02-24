import OpenAI from "openai";

const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIAPI } = require('@openai/openai-api'); // Corrected import



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Initialize OpenAI API with your API key
const openai = new OpenAIAPI('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');

app.post('/generate-recipe', async (req, res) => {
    const { ingredients } = req.body;

    // Use OpenAI API to generate a recipe based on ingredients
    const prompt = `Create a recipe using the following leftover ingredients:\n${ingredients.join(', ')}`; // Join ingredients array into a string
    try {
        const response = await openai.completions.create({
            engine: 'text-davinci-002',
            prompt,
            max_tokens: 150,
            n: 1
        });

        const recipe = response.data.choices[0].text.trim();
        res.json({ recipe });
    } catch (error) {
        console.error('Error generating recipe:', error);
        res.status(500).json({ error: 'Failed to generate recipe' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
