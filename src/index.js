import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export async function imageGen(payload, requestContext) {
    console.log(payload)

    const { prompt } = payload;

    const imagesResponse = await client.images.generate({
        model: 'dall-e-2',
        prompt: prompt,
        n: 1,
        quality: "standard",
        response_format: 'url',
        size: "1024x1024",
    });

    const image_url = imagesResponse.data[0].url;

    console.log(`Generated Images for ${prompt}: ${JSON.stringify(image_url)}`);

    return [image_url]
}