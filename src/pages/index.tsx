// @ts-nocheck
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Modal from "react-modal";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

// const DynamicHeader = dynamic(
// 	() => import("./flexible").then(({ flexible }) => flexible),
// 	{ ssr: false },
// );

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		border: 0,
	},
};
Modal.setAppElement("#__next");
export default function Home() {
	const [playing, setPlaying] = useState(false);
	const [openVideo, setOpenVideo] = useState(false);
	const [stars, setStars] = useState(null);
	useEffect(() => {
		fetch("https://api.github.com/repos/dbpunk-labs/db3")
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setStars(res.stargazers_count);
			});
	}, []);

	function paly() {
		setPlaying(true);
		setOpenVideo(true);
	}

	return (
		<>
			<Head>
				<title>DB3</title>
				<meta name='description' content='DB3' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* <DynamicHeader /> */}
			<div className='container-center-horizontal'>
				<div className='home-container screen'>
					<div className='header'>
						<div className='header-left'>
							<img
								className='logo'
								src='/static/img/logo@2x.png'
								alt='logo'
							/>
							 <a className='build' href="https://docs.db3.network">Docs</a>
							{/* <div className='community'>Community</div> */}
						</div>
						<div className='header-right'>
							<div className='group-341'></div>
							 <a className='github' rel="noreferrer"  href="https://github.com/dbpunk-labs/db3" target="_blank">GitHub</a>
							<div className='github-star'>
								<img
									className='icon-star'
									src='/static/img/star@2x.png'
									alt='icon-star'
								/>
								<div className='stars'>{stars}</div>
							</div>
						</div>
					</div>
					<div className='hero'>
						<div className='overlap-group10'>
							<div className='db3-desc'>
								<div className='db3-info'>
									<h1 className='db3-network-is-an-op'>
										<div className='db3-title'>
											DB3 Network
										</div>
										<p className='desc'>
                                           A lightweight, permanent JSON document database for Web3
										</p>
									</h1>
									<div className='header-btn'>
										<a className='overlap-group2' rel="noreferrer" href="https://console.cloud.db3.network/console/" target="_blank">
                                           Try the Cloud
										</a>
								     	<a className='overlap-group2' rel="noreferrer" href="https://github.com/dbpunk-labs/db3" target="_blank">
                                           Github
                                         </a>
									</div>

								</div>
								<div className='db3-process' >
                                  	<img
										className='process-img'
										src='/static/img/process.png'
									/>
									<img
										className='process-img-m'
										src='/static/img/process-m.png'
									/>

									
								</div>
							</div>
						</div>
					</div>

					<div className='how'>
						<p className='how-to-change-d-app-structure-with-db3 inter-semi-bold-black-26px'>
							How to change dAPP structure with DB3
						</p>
						<p className='make-apps-more-decen inter-normal-black-16px'>
							Decentralized Database as back-end service for you dApps.  
							DB3 allow you to quickly build a fully decentralized application
							instead of web2.5 by replacing your Firebase/Mysql.
						</p>

						{/* <a className='db3-btn'>View Document</a> */}
					</div>
					<div className='group-40'>
						<div className='vs-before'>
							<div className='overlap-title'>
								<div className='before'>Before</div>
								<p className='need-to-rely-on-a-ce'>
									Need to rely on a centralized database and
									maintain your own servers
								</p>
							</div>
							<img src='/static/img/before.png' width={636} />
						</div>
						<div className='vs-after'>
							<div className='overlap-title'>
								<div className='after'>After</div>
								<p className='instead-of-a-central'>
									Use DB3 to make your application decentralized and remove centralized server
								</p>
							</div>
							<img src='/static/img/after.png' width={636} />
						</div>
					</div>
					<div className='database'>
						<div className='group-347'>
							<div className='decentralized-real-time-database inter-semi-bold-black-26px'>
								Decentralized real-time database
							</div>
							<p className='db3-is-a-decentraliz inter-normal-black-16px'>
								DB3 is a decentralized database network that
								anyone can use without permission, with lots of novel properties
							</p>
						</div>
						<div className='view-container'>
							<div className='view'>
								<div className='rectangle-178 mutable'></div>
								<div className='mutable-document inter-medium-black-20px'>
									Mutable Document
								</div>
								<p className='the-data-stored-on-t inter-normal-black-14px'>
									The data stored on the DB3 network are
									dynamic structured data that can be updated
									in real time
								</p>
							</div>
							<div className='view'>
								<div className='rectangle-178 ownership'></div>
								<div className='mutable-document inter-medium-black-20px'>
									Data Ownership
								</div>
								<p className='the-data-stored-on-t inter-normal-black-14px'>
									The data stored in DB3 Network is completely
									controlled by private key signature.
								</p>
							</div>
							<div className='view'>
								<div className='rectangle-178 data-code'></div>
								<div className='mutable-document inter-medium-black-20px'>
									Data Programmable
								</div>
								<p className='the-data-stored-on-t inter-normal-black-14px'>
									Deploy complex data processing logic to the
									chain in a functional manner which can make
									the data processing transparent
								</p>
							</div>
							<div className='view'>
								<div className='rectangle-178 fast'></div>
								<div className='mutable-document-1 inter-medium-black-20px'>
									Blazed Fast Read&amp;Wirte
								</div>
								<p className='the-data-stored-on-t inter-normal-black-14px'>
									DB3 can provide high-performance data read
									and write services without losing the
									consensus security of the blockchain
								</p>
							</div>
						</div>
					</div>
					
					<div className='demo'>
						<p className='what-you-can-build-with-db3 inter-semi-bold-black-26px'>
							What you can build with DB3
						</p>
						<p className='projects-developed-b inter-normal-black-16px'>
							projects developed based on DB3, including
							information management tools, social, NFT, ZK-Prove,
							etc
						</p>
						<div className='card-container'>
							<div className='card-gamefi'>
								<img src='/static/img/gamefi.png' width={294} />
								<p className='todo-list'>GameFi</p>
							</div>
							<div className='card-social'>
								<img src='/static/img/social.png' width={294} />
								<p className='decentralized-social decentralized'>
									Decentralized social networking and forums
								</p>
							</div>
							<div className='cardnft'>
								<img
									className='nft-1'
									src='/static/img/nft-1.png'
									alt='NFT 1'
								/>
								<div className='dynamic-nft'>Dynamic NFT</div>
							</div>
							<div className='card-more'>
								<img src='/static/img/more.png' />
								<div className='place'>More</div>
							</div>
						</div>
						{/* <div className='db3-btn'>
							Check more&nbsp;&nbsp;Best practice in Community
						</div> */}
					</div>
					<div className='footer-group'>
						<div className='footer'>
							<div className='footer-left'>
								<img
									className='logo-f'
									src='/static/img/logo-f.png'
									alt='Union'
								/>
								<div className='group-17'>
									<a rel="noreferrer" href="https://twitter.com/Db3Network" target="_blank" >
									<img
										className='icon-twitter'
										src='/static/img/icon _twitter_.png'
										alt='icon &#34;github&#34;'
									/>
									</a>
									<a rel="noreferrer"  href="https://github.com/dbpunk-labs/db3" target="_blank" >
										<img
											className='icon-github'
											src='/static/img/icon _github_.png'
											alt='icon &#34;github&#34;'
										/>
									</a>
									
									{/* <img
										className='icon-youtube'
										src='/static/img/icon _youtube_.png'
										alt='icon-youtube'
									/> */}
									<a rel="noreferrer" href="https://discord.com/invite/sgY2bbFCzr" target="_blank">
									<img
										className='icon-discord'
										src='/static/img/icon _discord_.png'
										alt='icon &#34;discord&#34;'
									/>
									</a>
								</div>
							</div>
							<div className='footer-right'>
								{/* <div className='products-decentraliz'>
									<span className='inter-bold-black-18px'>
										Products
										<br />
									</span>
									<span className='span1-3 footer-link'>
										Decentralized Database
										<br />
										DB3js
										<br />
										Database management
										<br />
										Explorer
									</span>
								</div> */}
								<div className='developers-documents-github'>
									<span className='inter-bold-black-18px ' >
										Developers
										<br />
									</span>
									<span className='span1-1 footer-link' >
										<a rel="noreferrer"  href="https://github.com/dbpunk-labs/db3" target="_blank">
										GitHub
										</a>
										{/* Documents
										<br /> */}
										
									</span>
								</div>
								<div className='community-forum-twitter-discord inter-bold-black-18px'>
									<span className='inter-bold-black-18px'>
										Community
										<br />
									</span>
									<span className='span1-1 footer-link'>
										<a  rel="noreferrer" href="https://twitter.com/Db3Network" target="_blank"  >Twitter</a>

										<br />

										<a rel="noreferrer" href="https://discord.com/invite/sgY2bbFCzr" target="_blank">
										Discord
										</a>
										
									</span>
								</div>
							</div>
						</div>
						<p className='copyright-db3-team'>
							Copyright @ DB3 Team | All Rights Reserved
						</p>
					</div>
				</div>
			</div>
			<Modal
				isOpen={openVideo}
				style={customStyles}
				onRequestClose={() => setOpenVideo(false)}
				contentLabel='See how DB3 works'
			>
				<div className='modal-title'>See how DB3 works</div>
				<div className='sub-title'>
					Find out what needs to be done to build a DAPP with DB3.Just
					like use firebase before
				</div>
				<img
					className='close-play'
					src='/static/img/close.png'
					onClick={() => setOpenVideo(false)}
				/>
				<ReactPlayer
					className='play-video'
					playing={playing}
					width={900}
					light={true}
					height={500}
					style={{
						display: openVideo ? "block" : "none",
					}}
					url='https://www.youtube.com/watch?v=dkKo9U_KJBc'
				/>
			</Modal>
		</>
	);
}
