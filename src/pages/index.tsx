import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import './layout.css';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ContentSubsection from '../components/ContentSubsection';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<main>
				<Hero />
				<ContentSection heading="A Bit About Me">
					<p>
						I&apos;ve been working in the web development industry for more than
						20 years. My career began as a layout designer for local businesses,
						and from there I grew to become a full stack developer. This has
						allowed me the privilege of working with excellent companies like{' '}
						<a href="http://primenow.amazon.com/">Amazon Prime Now</a> and{' '}
						<a href="http://aws.amazon.com/">Amazon Web Services</a>,{' '}
						<a href="http://www.ghc.org/">Group Health</a>,{' '}
						<a href="http://www.cbsradio.com/">CBS Radio</a>, and{' '}
						<a href="http://www.intelius.com/">Intellius</a>. Currently I&apos;m
						delighting customers at Amazon Web Services.
					</p>

					<Button>Download my resume</Button>
					{/* <a className="resume" href="/resume.pdf">Download my
          resume</a> */}

					<br />
					<em>
						<b>Note:</b> I am not accepting contract positions at this time.
					</em>
				</ContentSection>

				<ContentSection heading="My Skills">
					<div className="row">
						<div className="large-4 small-12 columns skill">
							<ContentSubsection heading="Front End Development">
								<p>
									I&apos;ve been coding semantic websites professionally for
									over 20 years, and always stay up to date on the latest
									standards, techniques, and trends.
								</p>
							</ContentSubsection>
						</div>
						<div className="large-4 small-12 columns skill">
							<ContentSubsection heading="Web Design">
								<p>
									Over the years, I&apos;ve implemented a number of content
									management and e-commerce systems including Wordpress,
									Magento, and Adobe CQ using bespoke designs.
								</p>
							</ContentSubsection>
						</div>
						<div className="large-4 small-12 columns skill">
							<ContentSubsection heading="Full Stack Web Development">
								<p>
									Though my strongest skills are in Front End development, I
									have contributed to the deployment of distributed Java, Ruby
									on Rails, and Node.JS applications.
								</p>
							</ContentSubsection>
						</div>
					</div>
				</ContentSection>
			</main>

			<Footer />
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>Austin Hinderer</title>
		<meta name="description" content="Portfolio and stuff" />
		<meta name="author" content="Austin Hinderer" />
		<meta
			name="copyright"
			content={`Zephyr Studios, LLC. Copyright (c) ${new Date().getFullYear()}`}
		/>

		{/* Styles <link rel="stylesheet" href="css/style.css"> */}
		{/* Modernizr <script src="js/modernizr.min.js"></script> */}
		{/* Typekit (need new font) <script src="//use.typekit.net/ahw6iat.js"></script>
  <script>try { Typekit.load(); } catch (e) { }</script> */}
	</>
);
