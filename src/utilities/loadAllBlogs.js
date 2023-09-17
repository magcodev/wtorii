
const loadAllBlogs = async() => {
    // const res = await fetch("http://localhost:5000/blogs", {
    //     cache: 'no-cache'
    // });
    // console.log(res, "Hello from");
    // return res.json();

    const resp = {
        "blogs": [
                  {
                    "id": 1,
                    "title": "Breaking News: Earthquake Hits City",
                    "categoryId": 1,
                    "category": "Natural Disasters",
                    "date": "2023-07-15",
                    "description": "A powerful earthquake measuring 7.2 on the Richter scale struck the city today, causing significant damage to buildings and infrastructure. Rescue and relief operations are underway.",
                    "source": "Example News Network",
                    "image": "https://images.unsplash.com/photo-1638890816065-9019f9f49238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    "id": 2,
                    "title": "New Study Shows Benefits of Exercise",
                    "categoryId": 2,
                    "category": "Health",
                    "date": "2023-07-14",
                    "description": "A recent study published in a scientific journal reveals the numerous health benefits of regular exercise, including improved cardiovascular health, reduced risk of chronic diseases, and enhanced mental well-being.",
                    "source": "Example Health Magazine",
                    "image": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  },
                  {
                    "id": 3,
                    "title": "World Leaders Gather for Climate Summit",
                    "categoryId": 3,
                    "category": "Environment",
                    "date": "2023-07-13",
                    "description": "Global leaders from around the world convened in a major summit to discuss climate change and environmental sustainability. The summit aims to address pressing issues and develop strategies for mitigating the impact of climate change.",
                    "source": "Example News Agency",
                    "image": "https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    "id": 4,
                    "title": "Tech Company Unveils Revolutionary Product",
                    "categoryId": 4,
                    "category": "Technology",
                    "date": "2023-07-12",
                    "description": "A leading tech company announced the launch of a groundbreaking product that promises to revolutionize the industry. The product offers cutting-edge features and advanced functionality, setting a new standard for innovation.",
                    "source": "Example Tech News",
                    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    "id": 5,
                    "title": "Election Results: New President Elected",
                    "categoryId": 5,
                    "category": "Politics",
                    "date": "2023-07-11",
                    "description": "The election results are in, and the country has elected a new president. The new leader is expected to bring about significant changes and address key issues facing the nation.",
                    "source": "Example Politics Gazette",
                    "image": "https://images.unsplash.com/photo-1592036160420-8e862f871b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    "id": 6,
                    "title": "Study Finds Link Between Diet and Heart Health",
                    "categoryId": 2,
                    "category": "Health",
                    "date": "2023-07-10",
                    "description": "A recent study conducted by experts in the field reveals a strong link between diet and heart health. The findings emphasize the importance of a balanced diet in maintaining cardiovascular well-being.",
                    "source": "Example Health Institute",
                    "image": "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  },
                  {
                    "id": 7,
                    "title": "New Sports Stadium to be Constructed",
                    "categoryId": 1,
                    "category": "Sports",
                    "date": "2023-07-09",
                    "description": "The city council has announced plans to build a state-of-the-art sports stadium to host major sporting events. The new facility is expected to attract both local and international teams and boost the economy.",
                    "source": "Example Sports Tribune",
                    "image": "https://images.unsplash.com/photo-1590372447928-33080a2b401a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  },
                  {
                    "id": 8,
                    "title": "Major Education Reforms Proposed",
                    "categoryId": 1,
                    "category": "Education",
                    "date": "2023-07-08",
                    "description": "The Ministry of Education has unveiled a comprehensive set of reforms aimed at improving the education system. The proposed changes include curriculum enhancements, teacher training programs, and increased funding for schools.",
                    "source": "Example Education Journal",
                    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  },
                  {
                    "id": 9,
                    "title": "Company X Announces Record Profits",
                    "categoryId": 1,
                    "category": "Business",
                    "date": "2023-07-07",
                    "description": "Company X, a leading global corporation, has reported record-breaking profits for the fiscal year. The impressive financial performance is attributed to successful product launches, expanded market reach, and cost-saving measures.",
                    "source": "Example Business Daily",
                    "image": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  } 
            ]   
          }

          return resp.blogs;
};

export default loadAllBlogs;