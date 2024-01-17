"use client"
import Link from "next/link";
import Image from "next/image";
import classes from "./blogList.module.css";





const data = [
  {
  author: "https://www.facebook.com/bbcnews",
  content: "American bully XL dogs in England and Wales must be kept on a lead and muzzled in public now that a new law has come into effect. \r\nBreeding, selling or abandoning them is also illegal as of New Year… [+2413 chars]",
  description: "Under new rules, owners of the breed must also ensure their dog is muzzled in public.",
  publishedAt: "2023-12-31T02:17:12Z",
  title: "American bully XL dogs must now be kept on a lead",
  url: "https://www.bbc.co.uk/news/uk-67851343",
  urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/17CCD/production/_131058479_dogs2.jpg",
  source: {
      id: "bbc-news",
      name: "BBC News"
  }
  },
  {
  author: null,
  content: "BBC correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn. The pair have been learning to live together - walking, taking public transport, drinking coffee and even … [+384 chars]",
  description: "Correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn.",
  publishedAt: "2024-01-05T12:34:41Z",
  source: {id: 'bbc-news', name: 'BBC News'},
  title: "BBC reporter Sean Dilley finally meets his new guide dog",
  url: "https://www.bbc.co.uk/news/av/uk-67890376",
  urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/2B03/production/_132211011_p0h387r0.jpg"
  },
  {
  author: null,
  content: "Dashcam footage shows drivers trying to steer the dog towards exits on the Staten Island Expressway in New York. \r\nSeveral cars slowed down to corral the dog to one side, before one motorist gave cha… [+152 chars]",
  description: "Dashcam footage shows drivers trying to steer the dog towards exits on the Staten Island Expressway.",
  publishedAt: "2023-12-13T03:06:05Z",
  source: {id: 'bbc-news', name: 'BBC News'},
  title: "Watch: Motorists block road to save runaway chihuahua",
  url: "https://www.bbc.co.uk/news/av/world-us-canada-67700100",
  urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/7835/production/_132037703_p0gz6z13.jpg"
  },
  {
      author: null,
      content: "Dashcam footage shows drivers trying to steer the dog towards exits on the Staten Island Expressway in New York. \r\nSeveral cars slowed down to corral the dog to one side, before one motorist gave cha… [+152 chars]",
      description: "Dashcam footage shows drivers trying to steer the dog towards exits on the Staten Island Expressway.",
      publishedAt: "2023-12-13T03:06:05Z",
      source: {id: 'bbc-news', name: 'BBC News'},
      title: "Watch: Motorists block road to save runaway chihuahua",
      url: "https://www.bbc.co.uk/news/av/world-us-canada-67700100",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/7835/production/_132037703_p0gz6z13.jpg"
  },
  {
      author: "https://www.facebook.com/bbcnews",
      content: "American bully XL dogs in England and Wales must be kept on a lead and muzzled in public now that a new law has come into effect. \r\nBreeding, selling or abandoning them is also illegal as of New Year… [+2413 chars]",
      description: "Under new rules, owners of the breed must also ensure their dog is muzzled in public.",
      publishedAt: "2023-12-31T02:17:12Z",
      title: "American bully XL dogs must now be kept on a lead",
      url: "https://www.bbc.co.uk/news/uk-67851343",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/17CCD/production/_131058479_dogs2.jpg",
      source: {
          id: "bbc-news",
          name: "BBC News"
      }
      },
      {
      author: null,
      content: "BBC correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn. The pair have been learning to live together - walking, taking public transport, drinking coffee and even … [+384 chars]",
      description: "Correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn.",
      publishedAt: "2024-01-05T12:34:41Z",
      source: {id: 'bbc-news', name: 'BBC News'},
      title: "BBC reporter Sean Dilley finally meets his new guide dog",
      url: "https://www.bbc.co.uk/news/av/uk-67890376",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/2B03/production/_132211011_p0h387r0.jpg"
      },
      {
          author: "https://www.facebook.com/bbcnews",
          content: "American bully XL dogs in England and Wales must be kept on a lead and muzzled in public now that a new law has come into effect. \r\nBreeding, selling or abandoning them is also illegal as of New Year… [+2413 chars]",
          description: "Under new rules, owners of the breed must also ensure their dog is muzzled in public.",
          publishedAt: "2023-12-31T02:17:12Z",
          title: "American bully XL dogs must now be kept on a lead",
          url: "https://www.bbc.co.uk/news/uk-67851343",
          urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/17CCD/production/_131058479_dogs2.jpg",
          source: {
              id: "bbc-news",
              name: "BBC News"
          }
          },
          {
          author: null,
          content: "BBC correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn. The pair have been learning to live together - walking, taking public transport, drinking coffee and even … [+384 chars]",
          description: "Correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn.",
          publishedAt: "2024-01-05T12:34:41Z",
          source: {id: 'bbc-news', name: 'BBC News'},
          title: "BBC reporter Sean Dilley finally meets his new guide dog",
          url: "https://www.bbc.co.uk/news/av/uk-67890376",
          urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/2B03/production/_132211011_p0h387r0.jpg"
          },
          {
              author: "https://www.facebook.com/bbcnews",
              content: "American bully XL dogs in England and Wales must be kept on a lead and muzzled in public now that a new law has come into effect. \r\nBreeding, selling or abandoning them is also illegal as of New Year… [+2413 chars]",
              description: "Under new rules, owners of the breed must also ensure their dog is muzzled in public.",
              publishedAt: "2023-12-31T02:17:12Z",
              title: "American bully XL dogs must now be kept on a lead",
              url: "https://www.bbc.co.uk/news/uk-67851343",
              urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/17CCD/production/_131058479_dogs2.jpg",
              source: {
                  id: "bbc-news",
                  name: "BBC News"
              }
              },
              {
              author: null,
              content: "BBC correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn. The pair have been learning to live together - walking, taking public transport, drinking coffee and even … [+384 chars]",
              description: "Correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn.",
              publishedAt: "2024-01-05T12:34:41Z",
              source: {id: 'bbc-news', name: 'BBC News'},
              title: "BBC reporter Sean Dilley finally meets his new guide dog",
              url: "https://www.bbc.co.uk/news/av/uk-67890376",
              urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/2B03/production/_132211011_p0h387r0.jpg"
              },
]


export default function BlogLists (){
    return (
        <>
          <div className={classes.blogListsStyle}>
              <ul className={classes.blogListsWrapper}>
                {data.map((list, idx)=>{
                    return (
                      <li key={idx} className={classes.listContentContainer}>
                        <div className={classes.listImgContainer}>
                            <Link href={""} className={classes.LinkStyle}>
                                <Image 
                                  src={list.urlToImage} 
                                  alt="list-imgae"
                                  objectFit="cover"
                                  width={240}
                                  height={160}
                                  
                                ></Image>
                            </Link>
                        </div>
                        <div className={classes.contentContainer}>
                          <Link 
                            href={""} 
                            className={classes.LinkStyle}
                          >
                            <h4 className={classes.listTitle}>{list.title}</h4>
                          </Link>
                          <span className={classes.listContent}>{list.content}</span>
                          <button className={classes.listBtn}>view more</button>
                          <div className={classes.contentIconContainer}>
                            <div className={classes.contentDateContainer}>
                              <Image 
                                src="/img/date_icon.png" 
                                alt="content-date" 
                                objectFit={'cover'}
                                width={15}
                                height={15}
                              ></Image>
                              <span className={classes.contentDataSpan}>2024-01-20</span>
                            </div>
                            <div className={classes.sourceContainer}>
                              <Image 
                                src="/img/person_icon.png" 
                                alt="source-from" 
                                width={15}
                                height={15}

                              ></Image>
                              <span className={classes.contentAuthorSpan}>BBC News</span>
                            </div>
                          </div>
                        </div>
                      </li>
                        )
                    })}
                </ul>
          </div>
        
        </>
    )
}