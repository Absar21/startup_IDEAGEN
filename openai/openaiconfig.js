const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config();


const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const general_Overview=async(industry)=>{
    
    let prompt="general overview of startups in"+industry+"in paragraph of 50 words";
    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 70,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}

const generate_List=async(industry,country)=>{
    
    let prompt="list top 20 startup ideas in"+industry+" in "+country;

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 400,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}

const generate_Shortname=async(idea)=>{
    
    let prompt="extract the 2-5 words single title for "+idea;

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 10,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}


const generate_Detaildesc=async(idea)=>{
    
    let prompt="description of 70 words on the following idea "+idea;

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}


const generate_MarketPotential=async(idea)=>{
    
    let prompt="market potential and challanges of following idea "+idea+" in 70-100 words";

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 80,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}

const generate_MarketCompetitors=async(idea)=>{
    
    let prompt="market competitors in the following idea "+idea+" in 70-100 words";

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 80,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}

const generate_Innovation=async(idea)=>{
    
    let prompt="list 5 innovations in the startup idea of "+idea;

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 70,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}

const generate_Leagality=async(idea,country)=>{
    
    let prompt="explain legality and licensing of the "+idea+" for "+country+" in 50-100 words"

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 120,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}

const generate_Scalability=async(idea ,country)=>{
    
    let prompt="explian scalability of the "+idea+" for "+country;

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}


const generate_ExitStrategy=async(idea)=>{
    
    let prompt="explain exit strategy for investors of the following stratup idea"+idea+" in 50-100 words";

    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 110,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });

}


const generate_IdeaFromAbstract=async(abstract)=>{


let prompt=`Extract a business idea from this:\n\n${abstract}`
    return  await openai.createCompletion({

        model: "davinci-instruct-beta-v3",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });


    
}




export {
    general_Overview,
    generate_List,
    generate_Shortname,
    generate_Detaildesc,
    generate_MarketPotential,
    generate_MarketCompetitors,
    generate_Leagality,
    generate_Scalability,
    generate_Innovation,
    generate_ExitStrategy,
    generate_IdeaFromAbstract,








};

// generate_Idea("automobiles", "islamabad", "solar").then((res) => {
    
//     console.log(res.data.choices[0]);
// })

// validate_Idea('evelop an app that connects users with nearby carpooling services').then((res) => {
//     console.log(res.data.choices);
// });

// blog_topics("hello").then((res)=>{
//     console.log(res.data.choices[0]);
// })

