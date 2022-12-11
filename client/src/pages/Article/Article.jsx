import React, { useEffect, useState } from "react";
import gsap from "gsap";

import "../Article/article.css";
import styled from "styled-components";
 import COVID from "../../images/COVID.png";
import Banner2 from "../Article/Banner2";
import AC from "../../images/AC.jpg";
import MAGDY from "../../images/MAGDY.png";
 function Article() {
  const [show, setShow] = useState(true);

  const [state, setState] = useState({ text: " "});
  const [article, setArticle] = useState("");
  const handleArticle = () => {
    setArticle(state.text);
    setState(null);
  };
  const handleChange = (value) => {
    setState({ text: value });
    console.log(state.text);
  };

  const modules = {
    toolbar:{  container:[
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-4" },
        { indent: "+4" }
      ],
      ["link", "image", "video"],
      ["clean"],
    ]} 
        
    
  };{/*
   handlers: {
      image: imageHandler
    },
    clipboard: {
      matchVisual: false,}
  */}
  {/*const imageHandler=()=> {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
        const file = input.files[0];
        let formData = new FormData();
        formData.append('uri', file);
        const range = quill.getSelection(true);
        this.quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`);
        this.quill.setSelection(range.index + 1);
        //fetch api call for upload the image
        const data = await fetch(apiPath + '/api/upload'
        , {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('feathers-jwt')}`,
            },
            body: formData
        })
        const res = await data.json()
        this.quill.deleteText(range.index, 1);
        this.quill.insertEmbed(range.index, 'image', res.url);
    };
}   */}

  const formats = [
    "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  ];

  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    var tl = gsap.timeline({
      repeat: 100,
      repeatDelay: 3,
    });
    tl.fromTo(
      "#lo",
      { opacity: 0.8, x: -90 },
      { duration: 15, opacity: 1, x: 0 }
    );
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        className="ads"
        style={{
          zIndex: "10",
          transition: ".4s linear",
          opacity: show ? "0" : "1",
          transitionDelay: ".2s",
          boxShadow: ".1px .3px 5px var(--main)",
          position: "sticky",
          top: "0rem ",
          left: "0",
          right: "0",
          scrollBehavior: "smooth",
          marginTop: "3.3rem",
          background: "rgb(130,19,19)",
          background:
            "linear-gradient(242deg, rgba(130,19,19,1) 0%, rgba(117,16,16,0.7813276207965354) 0%, rgba(131,20,20,0.47076861458535524) 0%, rgba(115,20,40,0.5) 0%, rgba(119,17,17,0.9366071239021254) 16%, rgba(119,17,17,1) 22%, rgba(119,17,17,1) 41%, rgba(119,17,17,1) 43%, rgba(119,17,17,1) 63%, rgba(119,17,17,0.9366071239021254) 80%, rgba(119,17,17,1) 83%, rgba(119,17,17,1) 88%)",
        }}
      >
        <div
          id="lo"
          style={{
            scrollBehavior: "smooth",
            height: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "50%",
            margin: "auto",
            fontWeight: "700",
          }}
        >
          <img alt='' src={COVID} style={{ height: "100%" }} />
          <h5
            style={{
              color: "white",
              fontSize: "1.1rem",
              lineHeight: "1.1rem",
              textAlign: "left",
            }}
          >
            {" "}
            The Chance of Helping others is a great Gift .
          </h5>
        </div>
      </div>

      <div
        className="articlepagemain"
        style={{
          maxWidth: "100vw",
          gridTemplateColumns: "70% 30%",
        }}
      >
        <div className="diva">
          {article ? (
            <div dangerouslySetInnerHTML={{ __html: article }}></div>
          ) : (<>
           
            <div
              style={{
                backgroundColor: "white",
                overflow: "hidden",
                width: "fit-content",
                height: "fit-content",
                color: "var(--main)",
                borderRadius: "10px",
                margin: "auto",
                marginTop: "0rem",
                marginBottom: "3rem",
              }}
            >
             {" "}
            </div> <img alt='' src={COVID} style={{ marginBottom:'2rem',marginTop:'-2rem' }} /></>
          )}

            <h2>
            Children at the age of 11 can be healed from this disease if quickly
            discovered
          </h2>
          <h5>By: john trivial</h5>
          <img
            src={AC}
            style={{
              width: "100%",
              borderRadius: "4px",
              borderTop: "2px solid var(--main)",
              borderLeft: "2px solid var(--main)",
              boxShadow: "2px 3px 4px var(--main)",
              maxHeight: "24rem",
            }}
          />

          <h2>Description</h2>
          <p>
            This is a a transcription from a recent{" "}
            <a href="https://goodstuff.fm/smym/118">Show Me Your Mic episode</a>{" "}
            using <a href="https://descript.com/r/HkKZYn6bG">Descript</a>, a
            Mac/Windows transcription app.
          </p>

          <p>
            Descript is able to spit out a transcription that looks like what's
            below. The only edit I've done to it is doing a find/replace on the
            speaker's names to bold them and added manual line breaks to the
            text.
          </p>
          <h2>Goal</h2>
          <p>
            To make the presention of the transcription as readable and nice to
            look at as possible without having to do a bunch of work to make it
            look nice.
          </p>
          <h2>Transcription Sample</h2>
          <p>
            (<em>This is maybe 15% of the whole 55 minute episode</em>)
          </p>
          <p>
            <strong>Chris:</strong> I've stumbled into this fall either because
            I felt like I was I had some momentum. And then summer end of summer
            kind of happen. It was just kind of like everything feels old. And
            so this is the kicking getting back on the horse proverbial horse.
            But you did something neat speaking of recording and podcasting.
          </p>
          <p>
            So in your day job doing a podcast for your company and then getting
            the [00:13:00] opportunity to do a live podcast with that which is
            that this isn't the first time I don't think you've done that but I
            guess I'm curious just for podcasters other what I've liked about so
            the podcast is untapped. Or for on top is called drink socially
            untapped as the app that promotes the podcast are the podcast
            pronounced I guess and and I guess first of all the what's the
            format of the show regularly that you decided to sort of
          </p>
          <p>
            <strong>Kyle:</strong> Yeah, so usually well so I should say the
            majority of the actual like content and production of the show is on
            my co-host Tim who is one of the co-founders of untapped and he
            takes a lot of time to put together a little bit of like.
          </p>
          <p>
            We've got enough microphones for both Tim and I the to co-hosts and
            then the three different guests that we were going to put on it was
            kind of a logistical nightmare trying to figure out like hey do I
            have a cable is might have another cable. I had to look everywhere
            to find a bunch of XLR cables.
          </p>
          <p>
            <strong>Chris:</strong> What did like either you or untapped? I'm
            not sure where the line is. Probably fuzzy but
          </p>

          <p>
            Maybe maybe they consider like the little microphone that connects
            to the top to be the other two tracks.
          </p>
          <p>
            <strong>Chris:</strong> What you can get a one. Adapters on the top,
            you can be a two XLR input
          </p>
          <p>
            <strong>Kyle:</strong> Got it. Okay.
          </p>

          <p>
            <strong>Chris:</strong> I have one of those that I use.
          </p>
          <p>
            Yeah, I or I'm supposed to be using as a backup for any time. I do a
            podcast recording it's conveniently sitting in my backpack across
            the room. I can see it over there not being used as a backup for
            this recording.
          </p>
          <p>
            <strong>Kyle:</strong> is he as he goes and checks on his audio
            hijacking out there were still going.
          </p>
          <p>
            Yeah, and [00:21:00] I looks good. I really liked it. This was my
            first experience with the h66 track in particular. I had used a. I
            feel like it was assumed H1, or it was one of the first ones that I
            had ever. Come across with zoom and that was one of the first
            devices that I recorded voice over for for like videos when I was
            working at Mophie the battery case company.
          </p> 
        {/*  <ReactQuill
            theme="snow"
            onChange={handleChange}
            formats={formats}
            modules={modules}
            preserveWhitespace={true} 

          />
        
          <div onClick={handleArticle}>
            <button className="btn">Attach Article</button>
          </div> */} 
        </div>

        <div style={{ width: "92%", marginRight:'auto',marginLeft:'auto' }}>
          <img alt='' src={MAGDY} style={{ width: "100%" }} />

          <h5
            style={{
              marginTop: "3rem",
              marginBotom: "1rem",
              color: "var(--main)",
              fontWeight: "700",
              marginLeft: ".2rem",
            }}
          >
            Latest articles
          </h5>
          {[...Array(10)].map((k, i) => (
            <div>
              <div class="grid-container">
                <img alt='' class="item2" src={AC} />

                <div class="item3">
                  {" "}
                  Children at the age of 11 can be healed from this disease if
                  quickly discovered
                </div>

                <div class="item5">By: john trivial</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Banner2 />
    
    </div>
  );
}

export default Article;
const Divider = styled.div`
  height: 1rem;
  @media (max-width: 600px) {
    height: 2rem;
  }
`;
