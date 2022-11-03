import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimationDiv from "../../components/animation_div/AnimationDiv";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./projectdetails.css";

const ProjectDetails = () => {
    const {projectId} = useParams()
    console.log(projectId)

  return (
    <div>
      <AnimationDiv />
      <Navbar />

      <main>
        <div
          className="Hero_image__2c2i5"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            aria-hidden="true"
            style={{ width: "100%", paddingBottom: "60.9028%" }}
          />
          <picture>
            <source
              media="(max-width: 1024px) and (orientation: portrait)"
              srcSet={require("../../images/3c.jpg")}
              sizes="100vw"
            />
            <source srcSet={require("../../images/3c.jpg")} sizes="100vw" />
            <img
              src={require("../../images/3c.jpg")}
              alt=""
              loading="eager"
              decoding="async"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                opacity: 1,
                transition:
                  "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s",
              }}
            />
          </picture>
        </div>
        <a aria-label="Back to home page" href="/">
          <span
            className="Hero_logo__1aZ0K details_logo_main_parent"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1802.67 546.09"
              className="details_logo_main"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#fff;}" }}
                />
              </defs>
              <path
                className="cls-1"
                d="M465.86,172.33,298.06,396.08H278.92L114.82,171.6V449.07a97.16,97.16,0,0,1-97.15,97.14V31H129.52L290.71,252.55,451.88,31H563V546.21H465.86Z"
                transform="translate(-17.67 -12.62)"
              />
              <path
                className="cls-1"
                d="M886.57,154.67c-17.66-29.44-66.24-57.42-122.17-57.42-72.12,0-106.72,30.18-106.72,68.46,0,44.89,53,57.4,114.84,64.77,107.42,13.23,207.54,41.2,207.54,164.11,0,114.8-101.58,164.12-216.4,164.12-105.23,0-186.18-32.39-224.46-126.59,39.1-20.26,86-16,121.7,9.77,28.37,20.49,65.76,30,104.25,30,61.06,0,118.48-21.33,118.48-77.26,0-48.57-50.78-68.44-119.23-75.8C659.17,306.27,562,278.31,562,162.77c0-106,104.51-149.4,199.45-150.15,80.23,0,163.38,22.82,202.4,102.3Z"
                transform="translate(-17.67 -12.62)"
              />
              <path
                className="cls-1"
                d="M1429.77,283.46c2.2,130.27-77.27,262-257.59,262H969.8V30.29h202.38c176.65,0,255.4,125.85,257.59,253.17M1066.21,452h106c117,0,163.38-85.38,161.19-169.27-2.21-80.23-49.3-160.43-161.19-160.43h-106Z"
                transform="translate(-17.67 -12.62)"
              />
              <path
                className="cls-1"
                d="M1726.85,154.67c-17.67-29.44-66.24-57.42-122.17-57.42-72.12,0-106.72,30.18-106.72,68.46,0,44.89,53,57.4,114.83,64.77,107.43,13.23,207.54,41.2,207.54,164.11,0,114.8-101.57,164.12-216.39,164.12-105.23,0-186.19-32.39-224.46-126.59,39.1-20.26,86-16,121.7,9.77,28.37,20.49,65.75,30,104.24,30,61.07,0,118.49-21.33,118.49-77.26,0-48.57-50.79-68.44-119.23-75.8-105.24-12.52-202.4-40.48-202.4-156,0-106,104.52-149.4,199.46-150.15,80.23,0,163.38,22.82,202.4,102.3Z"
                transform="translate(-17.67 -12.62)"
              />
            </svg>
          </span>
        </a>

        <header className="Header_header__1SOLy">
          <h1 className="Header_title__3Luwf">Palette</h1>
          <a
            href="https://paintspalette.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underlined inverted Header_link__2-UsR"
          >
            View project
          </a>
          <p className="Header_description__19cR8">
            Numbered works closely with Palette’s teams on total strategy,
            branding, photography production and Shopify headless e-commerce
            website. The full case study would be soon here.
          </p>
          <div className="Header_tags__2WOJe">
            <dl className="Header_taglist__1PGmb">
              <dt>
                Role &amp; <br />
                services <br />{" "}
              </dt>
              <dd>Branding &amp; Packaging</dd>
              <dd>Art Direction</dd>
              <dd>UX/UI</dd>
              <dd>E-commerce</dd>
              <dd>Development</dd>
              <dd>Strategy</dd>
            </dl>
            <dl className="Header_taglist__1PGmb">
              <dt>
                Awards &amp; <br />
                recognition{" "}
              </dt>
              <dd>Featured on Behance</dd>
              <dd>Siteinspire</dd>
            </dl>
          </div>
        </header>
        <section>
  <div
    className="ImagesSlice_media--centered__1PaLN"
    style={{ position: "relative", overflow: "hidden" }}
  >
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "54.776%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=2560&auto=format,compress 2560w"
        sizes="66.66666666666667vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="66.66666666666667vw" /&gt;&lt;img loading="lazy"
      sizes="66.66666666666667vw"
      srcset="https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/24f7ff54-01b4-43c1-9f81-ffb31a9ed770_Palette-paint-shopify.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
  <div
    className="ImagesSlice_media--centered__1PaLN"
    style={{ position: "relative", overflow: "hidden" }}
  >
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "54.776%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=2560&auto=format,compress 2560w"
        sizes="66.66666666666667vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="66.66666666666667vw" /&gt;&lt;img loading="lazy"
      sizes="66.66666666666667vw"
      srcset="https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/8fceb4a4-29e7-4c9b-b299-49085fad6abc_palette-colors-modern-02.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
  <div style={{ position: "relative", overflow: "hidden" }}>
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "56.25%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=2560&auto=format,compress 2560w"
        sizes="100vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="100vw" /&gt;&lt;img loading="lazy" sizes="100vw"
      srcset="https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/d920c780-0c1e-4d64-ac67-1e51a3dc62df_palette-colors-modern-03.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
  <div
    className="ImagesSlice_media--centered__1PaLN"
    style={{ position: "relative", overflow: "hidden" }}
  >
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "54.776%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=2560&auto=format,compress 2560w"
        sizes="66.66666666666667vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="66.66666666666667vw" /&gt;&lt;img loading="lazy"
      sizes="66.66666666666667vw"
      srcset="https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/c033a11a-f8a7-48c3-bb8f-5b9ce8d6af6c_palette-colors-modern-01.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
  <div style={{ position: "relative", overflow: "hidden" }}>
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "56.25%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=2560&auto=format,compress 2560w"
        sizes="100vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="100vw" /&gt;&lt;img loading="lazy" sizes="100vw"
      srcset="https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/d10034fe-eb7a-4cf9-ab24-7dfce2279d1a_palette-colors-modern.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
  <div
    className="ImagesSlice_media--centered__1PaLN"
    style={{ position: "relative", overflow: "hidden" }}
  >
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "75.6757%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=2560&auto=format,compress 2560w"
        sizes="66.66666666666667vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="66.66666666666667vw" /&gt;&lt;img loading="lazy"
      sizes="66.66666666666667vw"
      srcset="https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/47ef40d1-b4ba-4688-858a-ef61a22be693_Palette-paint-branding.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
  <div style={{ position: "relative", overflow: "hidden" }}>
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "56.25%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=2560&auto=format,compress 2560w"
        sizes="100vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="100vw" /&gt;&lt;img loading="lazy" sizes="100vw"
      srcset="https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/b6419052-4563-4014-a796-a98cd10fde7d_palette-colors-modern-04.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
  <div
    className="ImagesSlice_media--centered__1PaLN"
    style={{ position: "relative", overflow: "hidden" }}
  >
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "152.604%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=2560&auto=format,compress 2560w"
        sizes="66.66666666666667vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="66.66666666666667vw" /&gt;&lt;img loading="lazy"
      sizes="66.66666666666667vw"
      srcset="https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/a3c028c0-9983-4954-9ca8-b3f19a1acb13_palette-colors-modern-05.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
  <div style={{ position: "relative", overflow: "hidden" }}>
    <div
      aria-hidden="true"
      style={{ width: "100%", paddingBottom: "56.25%" }}
    />
    <picture>
      <source
        srcSet="https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=320&auto=format,compress 320w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=620&auto=format,compress 620w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=960&auto=format,compress 960w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1280&auto=format,compress 1280w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1600&auto=format,compress 1600w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1920&auto=format,compress 1920w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=2240&auto=format,compress 2240w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=2560&auto=format,compress 2560w"
        sizes="100vw"
      />
      <img
        src="https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?auto=compress,format"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
          transition: "opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s"
        }}
      />
    </picture>
    <noscript>
      &lt;picture&gt;&lt;source
      srcset="https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=2560&amp;auto=format,compress
      2560w" sizes="100vw" /&gt;&lt;img loading="lazy" sizes="100vw"
      srcset="https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=320&amp;auto=format,compress
      320w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=620&amp;auto=format,compress
      620w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=960&amp;auto=format,compress
      960w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1280&amp;auto=format,compress
      1280w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1600&amp;auto=format,compress
      1600w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=1920&amp;auto=format,compress
      1920w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=2240&amp;auto=format,compress
      2240w,https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?w=2560&amp;auto=format,compress
      2560w"
      src="https://images.prismic.io/autumn-amsterdam/2af91a3b-eb5d-47c8-9ee6-1dd1b3de4fe3_palette-paint-interior-wall-paint.jpg?auto=compress,format"
      alt=""
      style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
    </noscript>
  </div>
</section>

        <section />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;