import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello! My name is Ashton Martin Zablan. My hobbies are running,
          working out, watching movies, and playing games. My favorite music
          is OPM songs, my favorite food is ramen, and in five years I see
          myself as a successful person in life.
        </p>

        <h2>Why I Chose My IT Specialization</h2>

        <p>
          I chose Data Analytics as my IT specialization because I am
          interested in how data can be used to understand problems and make
          better decisions. Almost every organization today collects large
          amounts of information, but that information becomes more useful
          when it can be properly analyzed and understood.
        </p>

        <p>
          What made me interested in Data Analytics is the growing importance
          of data in different industries. Businesses use data to understand
          their customers, improve their services, identify trends, and make
          informed decisions. I find it interesting that patterns and
          insights can be discovered from information that may seem
          complicated at first.
        </p>

        <p>
          I want to learn how to collect, organize, analyze, and visualize
          data. I also want to improve my problem-solving and technical skills
          by working with real-world datasets and turning data into useful
          information.
        </p>

        <p>
          I chose Data Analytics because it combines technology,
          problem-solving, and decision-making. I believe that developing
          skills in this field will help me understand real-world problems
          better and allow me to use data to create meaningful insights.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
    </Layout>
  );
}