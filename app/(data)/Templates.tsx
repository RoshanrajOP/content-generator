export default[
    {
      name: "Email Copy Generator",
      desc: "Generate compelling email copies for campaigns, outreach, or professional communication.",
      icon: "https://cdn-icons-png.flaticon.com/128/646/646094.png",
      category: "Marketing",
      slug: "email-copy-generator",
      aiPrompt: "Generate an email copy based on subject and tone provided by the user. Provide output in rich text editor format.",
       form: [
        {
          "label": "Email Subject",
          "field": "input",
          "name": "subject",
          "required": true
        },
        {
          "label": "Email Tone (e.g., Professional, Friendly)",
          "field": "input",
          "name": "tone",
          "required": true
        }
      ]
    },
    {
      "name": "Blog Post Outline",
      "desc": "Generate a structured outline for a blog post based on the topic and keywords.",
      "icon": "https://cdn-icons-png.flaticon.com/128/2950/2950666.png",
      "category": "Content Writing",
      "slug": "blog-post-outline",
      "aiPrompt": "Generate a blog outline with headings and subheadings based on the provided topic and keywords.",
      "form": [
        {
          "label": "Blog Topic",
          "field": "input",
          "name": "topic",
          "required": true
        },
        {
          "label": "Keywords to Include",
          "field": "textarea",
          "name": "keywords",
          "required": false
        }
      ]
    },
    {
      "name": "SEO Meta Description Generator",
      "desc": "Create optimized meta descriptions for your web pages to improve search engine visibility.",
      "icon": "https://cdn-icons-png.flaticon.com/128/1828/1828490.png",
      "category": "SEO",
      "slug": "seo-meta-description-generator",
      "aiPrompt": "Generate a meta description for the provided page content and focus keyword.",
      "form": [
        {
          "label": "Page Content Summary",
          "field": "textarea",
          "name": "contentSummary",
          "required": true
        },
        {
          "label": "Focus Keyword",
          "field": "input",
          "name": "focusKeyword",
          "required": true
        }
      ]
    },
    {
      "name": "Language Translator",
      "desc": "Translate any text to a specified language accurately and contextually.",
      "icon": "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      "category": "Learning",
      "slug": "language-translator",
      "aiPrompt": "Translate the given inputText into targetLanguage and provide output in rich text editor format.",
      "form": [
        {
          "label": "Enter text to translate",
          "field": "textarea",
          "name": "inputText",
          "required": true
        },
        {
          "label": "Target Language (e.g., French, Spanish)",
          "field": "input",
          "name": "targetLanguage",
          "required": true
        }
      ]
    },
    {
      "name": "Personal Affirmation Generator",
      "desc": "Generate uplifting and personalized affirmations to start your day on a positive note.",
      "icon": "https://cdn-icons-png.flaticon.com/128/747/747393.png",
      "category": "Wellness",
      "slug": "personal-affirmation-generator",
      "aiPrompt": "Generate 5 affirmations based on userMood and area of focus, and provide output in rich text editor format.",
      "form": [
        {
          "label": "Describe your current mood or situation",
          "field": "textarea",
          "name": "userMood",
          "required": true
        },
        {
          "label": "Area of focus (e.g., Confidence, Gratitude)",
          "field": "input",
          "name": "focusArea",
          "required": true
        }
      ]
    },
    {
      "name": "Poem Generator",
      "desc": "Craft personalized poems for any occasion or theme.",
      "icon": "https://cdn-icons-png.flaticon.com/128/3143/3143462.png",
      "category": "Creative Writing",
      "slug": "poem-generator",
      "aiPrompt": "Write a poem based on given theme and keywords in rich text editor format.",
      "form": [
        {
          "label": "Enter theme or occasion (e.g., Love, Birthday)",
          "field": "input",
          "name": "theme",
          "required": true
        },
        {
          "label": "Keywords or phrases to include",
          "field": "textarea",
          "name": "keywords"
        }
      ]
    },
    {
      "name": "Story Idea Generator",
      "desc": "Generate unique and engaging story ideas for writers and content creators.",
      "icon": "https://cdn-icons-png.flaticon.com/128/1055/1055607.png",
      "category": "Creative Writing",
      "slug": "story-idea-generator",
      "aiPrompt": "Generate 5 story ideas based on genre and keywords in rich text editor format.",
      "form": [
        {
          "label": "Enter preferred genre (e.g., Fantasy, Sci-fi)",
          "field": "input",
          "name": "genre",
          "required": true
        },
        {
          "label": "Add keywords or characters (Optional)",
          "field": "textarea",
          "name": "keywords"
        }
      ]
    },
    {
      "name": "Resume Builder",
      "desc": "Create a professional and ATS-friendly resume tailored to your industry.",
      "icon": "https://cdn-icons-png.flaticon.com/128/3037/3037083.png",
      "category": "Career",
      "slug": "resume-builder",
      "aiPrompt": "Create a professional resume based on provided jobDetails in a structured format.",
      "form": [
        {
          "label": "Enter your name and contact details",
          "field": "textarea",
          "name": "personalDetails",
          "required": true
        },
        {
          "label": "List your skills and achievements",
          "field": "textarea",
          "name": "skillsAchievements",
          "required": true
        },
        {
          "label": "Enter target job title or role",
          "field": "input",
          "name": "jobTitle",
          "required": true
        }
      ]
    },
    {
      "name": "LinkedIn Post Generator",
      "desc": "Generate engaging LinkedIn posts for networking or professional updates.",
      "icon": "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
      "category": "Career",
      "slug": "linkedin-post-generator",
      "aiPrompt": "Generate a LinkedIn post based on provided topic and goal in rich text editor format.",
      "form": [
        {
          "label": "Topic of the post (e.g., Achievement, Networking)",
          "field": "input",
          "name": "topic",
          "required": true
        },
        {
          "label": "Goal or audience for the post",
          "field": "textarea",
          "name": "goal"
        }
      ]
    },
    {
      "name": "Meal Planner",
      "desc": "Get a customized meal plan based on your dietary preferences.",
      "icon": "https://cdn-icons-png.flaticon.com/128/858/858222.png",
      "category": "Lifestyle",
      "slug": "meal-planner",
      "aiPrompt": "Create a meal plan for the week based on dietPreferences and any allergies in a tabular format.",
      "form": [
        {
          "label": "Enter dietary preferences (e.g., Vegan, Keto)",
          "field": "input",
          "name": "dietPreferences",
          "required": true
        },
        {
          "label": "List any allergies or restrictions",
          "field": "textarea",
          "name": "allergies"
        }
      ]
    },
    {
      "name": "Travel Itinerary Planner",
      "desc": "Plan your next trip with a detailed itinerary based on your destination and interests.",
      "icon": "https://cdn-icons-png.flaticon.com/128/1087/1087085.png",
      "category": "Travel",
      "slug": "travel-itinerary-planner",
      "aiPrompt": "Create a 3-day travel itinerary for destination based on interests and provide output in rich text editor format.",
      "form": [
        {
          "label": "Destination",
          "field": "input",
          "name": "destination",
          "required": true
        },
        {
          "label": "Key interests (e.g., Adventure, Culture)",
          "field": "textarea",
          "name": "interests"
        }
      ]
    },
    {
      "name": "Social Media Caption Generator",
      "desc": "Create captivating captions for your social media posts.",
      "icon": "https://cdn-icons-png.flaticon.com/128/733/733547.png",
      "category": "Social Media",
      "slug": "social-media-caption-generator",
      "aiPrompt": "Generate captions for a social media post based on image or topic description and tone.",
      "form": [
        {
          "label": "Image or Topic Description",
          "field": "textarea",
          "name": "description",
          "required": true
        },
        {
          "label": "Tone (e.g., Fun, Inspirational)",
          "field": "input",
          "name": "tone",
          "required": true
        }
      ]
    },
    {
      "name": "E-commerce Product Description",
      "desc": "Write compelling product descriptions for online stores.",
      "icon": "https://cdn-icons-png.flaticon.com/128/2991/2991148.png",
      "category": "E-commerce",
      "slug": "ecommerce-product-description",
      "aiPrompt": "Create a persuasive product description based on product details and target audience.",
      "form": [
        {
          "label": "Product Details",
          "field": "textarea",
          "name": "productDetails",
          "required": true
        },
        {
          "label": "Target Audience",
          "field": "input",
          "name": "audience",
          "required": true
        }
      ]
    },
    {
      "name": "Event Invitation Generator",
      "desc": "Design personalized event invitations.",
      "icon": "https://cdn-icons-png.flaticon.com/128/2732/2732898.png",
      "category": "Events",
      "slug": "event-invitation-generator",
      "aiPrompt": "Generate an invitation template for an event based on event type and details.",
      "form": [
        {
          "label": "Event Type (e.g., Wedding, Party)",
          "field": "input",
          "name": "eventType",
          "required": true
        },
        {
          "label": "Event Details",
          "field": "textarea",
          "name": "eventDetails",
          "required": true
        }
      ]
    },
    {
      "name": "Fitness Workout Plan",
      "desc": "Generate a workout plan tailored to your fitness level and goals.",
      "icon": "https://cdn-icons-png.flaticon.com/128/3112/3112946.png",
      "category": "Fitness",
      "slug": "fitness-workout-plan",
      "aiPrompt": "Create a workout plan based on user goals and fitness level in a structured format.",
      "form": [
        {
          "label": "Fitness Goals (e.g., Weight Loss, Muscle Gain)",
          "field": "input",
          "name": "fitnessGoals",
          "required": true
        },
        {
          "label": "Current Fitness Level (e.g., Beginner, Advanced)",
          "field": "input",
          "name": "fitnessLevel",
          "required": true
        }
      ]
    },
    {
      "name": "Birthday Message Generator",
      "desc": "Generate heartfelt birthday messages for your loved ones.",
      "icon": "https://cdn-icons-png.flaticon.com/128/2620/2620970.png",
      "category": "Social Media",
      "slug": "birthday-message-generator",
      "aiPrompt": "Write a personalized birthday message based on recipient's relationship and occasion details.",
      "form": [
        {
          "label": "Recipient's Relationship (e.g., Friend, Parent)",
          "field": "input",
          "name": "relationship",
          "required": true
        },
        {
          "label": "Occasion Details",
          "field": "textarea",
          "name": "occasionDetails",
          "required": true
        }
      ]
    },
    {
      "name": "Ad Copy Generator",
      "desc": "Craft effective ad copies for digital marketing campaigns.",
      "icon": "https://cdn-icons-png.flaticon.com/128/2840/2840374.png",
      "category": "Marketing",
      "slug": "ad-copy-generator",
      "aiPrompt": "Generate an ad copy based on product or service details and target audience.",
      "form": [
        {
          "label": "Product or Service Details",
          "field": "textarea",
          "name": "details",
          "required": true
        },
        {
          "label": "Target Audience",
          "field": "input",
          "name": "audience",
          "required": true
        }
      ]
    },
    {
      "name": "Recipe Generator",
      "desc": "Get personalized recipes based on available ingredients.",
      "icon": "https://cdn-icons-png.flaticon.com/128/3069/3069172.png",
      "category": "Lifestyle",
      "slug": "recipe-generator",
      "aiPrompt": "Generate a recipe based on provided ingredients and dietary preferences.",
      "form": [
        {
          "label": "Available Ingredients",
          "field": "textarea",
          "name": "ingredients",
          "required": true
        },
        {
          "label": "Dietary Preferences (e.g., Gluten-Free, Vegan)",
          "field": "input",
          "name": "preferences",
          "required": true
        }
      ]
    },
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depends on yout blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',

        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',

        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',

        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',

        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required: true
            },

        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',

        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            },

        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',

        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            },

        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',

        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required: true
            },

        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',

        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required: true
            },

        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',

        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            },

        ]
    },
  ]
  