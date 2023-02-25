import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [playing, setPlaying] = useState(false);
	const [openVideo, setOpenVideo] = useState(false);

	function paly() {
		setPlaying(true)
		setOpenVideo(true)
	}

	return (
		<>
			<Head>
				<title>DB3</title>
				<meta
					name='description'
					content='DB3'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='container-center-horizontal'>
				<div className='home-container screen'>
					<div className='hero'>
						<div className='flex-row'>
							<img
								className='logo'
								src='/static/img/logo@2x.png'
								alt='logo'
							/>
							<div className='build'>Build</div>
							<div className='community'>Community</div>
							<div className='group-342'>
								<div className='group-341'></div>
								<div className='github'>Github</div>
							</div>
						</div>
						<div className='overlap-group10'>
							<div className='overlap-group9'>
								<div className='overlap-group1' onClick={paly} style={{display: !openVideo ? 'block' : 'none'}}>
									<img
										className='ellipse-18'
										src='/static/img/ellipse-18-1.png'
										alt='Ellipse 18'
									/>
									<div className='group-56'>
										<img
											className='subtract-2'
											src='/static/img/subtract-11@2x.png'
											alt='Subtract'
										/>
									</div>
									<div className='group-57'>
										<img
											className='subtract-3'
											src='/static/img/subtract-12@2x.png'
											alt='Subtract'
										/>
									</div>
									<img
										className='ellipse-13'
										src='/static/img/ellipse-13-8@2x.png'
										alt='Ellipse 13'
									/>
									<img
										className='subtract-4'
										src='/static/img/subtract-9@2x.png'
										alt='Subtract'
									/>
									<div className='db3 valign-text-middle'>
										DB3
									</div>
									<div className='web3 valign-text-middle'>
										WEB3
									</div>
									<div className='ethereum inter-semi-bold-ebony-clay-11-6px'>
										Ethereum
									</div>
									<div className='filecoin inter-semi-bold-ebony-clay-11-6px'>
										Filecoin
									</div>
									<img
										className='filecoin-1-1'
										src='/static/img/filecoin-1-2@2x.png'
										alt='Filecoin 1'
									/>
									<div className='group-52'>
										<img
											className='union'
											src='/static/img/union-2@2x.png'
											alt='Union'
										/>
									</div>
									<img
										className='file-ethereum-logo-2014-1'
										src='/static/img/fileethereum-logo-2014-1-1@2x.png'
										alt='FileEthereum logo 2014 1'
									/>
									<img
										className='vector-6'
										src='/static/img/vector-6-1@2x.png'
										alt='Vector 6'
									/>
									<img
										className='vector-7'
										src='/static/img/vector-7-1@2x.png'
										alt='Vector 7'
									/>
									<img
										className='line-10'
										src='/static/img/line-10-2@2x.png'
										alt='Line 10'
									/>
									<div className='token-management'>
										Token Management
									</div>
									<div className='static-file-management'>
										Static File Management
									</div>
									<div className='data-management'>
										Data <br />
										Management
									</div>
									<img
										className='ellipse-17'
										src='/static/img/ellipse-17-2.png'
										alt='Ellipse 17'
									/>
									<img
										className='ellipse-14'
										src='/static/img/ellipse-14-3@2x.png'
										alt='Ellipse 14'
									/>
									<img
										className='subtract-5'
										src='/static/img/subtract-10@2x.png'
										alt='Subtract'
									/>
									<div className='dapp inter-semi-bold-ebony-clay-11-6px'>
										DAPP
									</div>
									<div className='overlap-group-1'>
										<div className='rectangle-11'></div>
										<div className='rectangle-12'></div>
										<div className='rectangle-13'></div>
									</div>
									<div className='play'>
									<img
										className='polygon-1'
										src='/static/img/polygon-1@2x.png'
										alt='Polygon 1'
									/>
								</div>
								</div>
								<ReactPlayer
									className='play-video'
									playing={playing}
									style={{display: openVideo ? 'block' : 'none'}}
									url='https://www.youtube.com/watch?v=dkKo9U_KJBc'
								/>
								<p className='db3-network-is-a-dec inter-normal-black-14px'>
									Db3 Network is a decentralized database
									network. All nodes are operated by miners.
									Developers can directly connect to the
									network to read and write data without a
									centralized server. DB3 Network provides a
									very friendly Firestore compatible
									TypeScript data read and write interface,
									developers can easily access, from
									centralized to decentralized smooth switch
								</p>
								<h1 className='db3-network-is-an-op'>
									<span className='span0-2'>
										DB3 Network <br />
									</span>
									<p className="desc">is an open source decentralizedalternative to Firestore</p>
									
								</h1>
								
							</div>
							<div className='overlap-group2'>
								<div className='start-build btn'>Start Build</div>
							</div>
							<div className='buttonsecondary-1 buttonsecondary-5 btn'>
								<div className='claim-gitpoap inter-normal-radical-red-16px'>
									Claim Gitpoap
								</div>
							</div>
						</div>
					</div>
					<div className='overlap-group11'>
						<div className='vs-firebase'>
							<div className='group-349'>
								<p className='boost-your-decentral'>
									Boost your decentralization process as
									usaual
								</p>
								<p className='the-way-you-use-db3'>
									The way you use DB3 is just same as Firebase
								</p>
							</div>
							<div className='view-1'>
								<div className='overlap-group-2'>
									<img
										className='line-4'
										src='/static/img/line-4@2x.png'
										alt='Line 4'
									/>
									<img
										className='line-5'
										src='/static/img/line-5@2x.png'
										alt='Line 5'
									/>
									<img
										className='line-9'
										src='/static/img/line-9@2x.png'
										alt='Line 9'
									/>
									<img
										className='line-7'
										src='/static/img/line-7@2x.png'
										alt='Line 7'
									/>
									<img
										className='line-8'
										src='/static/img/line-8@2x.png'
										alt='Line 8'
									/>
									<img
										className='ellipse-16'
										src='/static/img/ellipse-16.png'
										alt='Ellipse 16'
									/>
									<img
										className='ellipse-17-1'
										src='/static/img/ellipse-17-1.png'
										alt='Ellipse 17'
									/>
									<img
										className='ellipse-13-1'
										src='/static/img/ellipse-13-7.png'
										alt='Ellipse 13'
									/>
									<img
										className='subtract-6'
										src='/static/img/subtract-7@2x.png'
										alt='Subtract'
									/>
									<div className='build-with-firbasejs build-with inter-normal-white-12-8px'>
										Build with firbase.js
									</div>
									<p className='fee-charged-by-credit-card inter-normal-white-12-8px'>
										Fee Charged by Credit Card
									</p>
									<p className='user-authenticated-by-web2-account inter-normal-white-12-8px'>
										User Authenticated by Web2 account
									</p>
									<div className='realtime-database inter-normal-white-12-8px'>
										Realtime database
									</div>
									<div className='cloud-function inter-normal-white-12-8px'>
										Cloud Function
									</div>
									<div className='firebase'>Firebase</div>
									<img
										className='ellipse-14-1'
										src='/static/img/ellipse-14-2.png'
										alt='Ellipse 14'
									/>
									<img
										className='subtract-7'
										src='/static/img/subtract-8@2x.png'
										alt='Subtract'
									/>
									<div className='build-with-db3js build-with inter-normal-white-12-8px'>
										Build with db3.js
									</div>
									<p className='fee-charged-by-db3-token inter-normal-white-12-8px'>
										Fee Charged by DB3 token
									</p>
									<p className='user-authenticated-b inter-normal-white-12-8px'>
										User Authenticated by Blockchain Account
									</p>
									<div className='realtime-decentralized-database inter-normal-white-12-8px'>
										Realtime&nbsp;&nbsp;Decentralized
										Database
									</div>
									<div className='on-chain-contract'>
										On Chain Contract
									</div>
									<div className='web-30 web'>WEB 3.0</div>
									<div className='web-25 web'>WEB 2.5</div>
									<div className='logo-1 logo-3'>
										<img
											className='union-1'
											src='/static/img/union-4@2x.png'
											alt='Union'
										/>
										<img
											className='db3-1'
											src='/static/img/db3-1@2x.png'
											alt='DB3'
										/>
									</div>
									<img
										className='union-2'
										src='/static/img/union@2x.png'
										alt='Union'
									/>
								</div>
							</div>
							<div className='group-351'>
								<div className='overlap-group1-1'>
									<div className='group-350'>
										<div className='group-30'>
											<div className='ellipse-17-2'></div>
											<div className='ellipse-18-1'></div>
											<div className='ellipse-19'></div>
										</div>
										<img
											className='image-25'
											src='/static/img/image-25@2x.png'
											alt='image 25'
										/>
									</div>
									<img
										className='image-26'
										src='/static/img/image-26.png'
										alt='image 26'
									/>
								</div>
							</div>
						</div>
						<div className='group-container'>
							<div className='group-62'>
								<div className='logodb'>
									<img
										className='black-s'
										src='/static/img/black-s@2x.png'
										alt='Black-S'
									/>
								</div>
								<div className='decentralized-database decentralized inter-medium-black-16px'>
									Decentralized Database
								</div>
								<div className='save-data-on-chain inter-normal-black-14px'>
									Save data on chain
								</div>
							</div>
							<div className='group-61'>
								<div className='logojs'>
									<img
										className='vector'
										src='/static/img/vector-3@2x.png'
										alt='Vector'
									/>
								</div>
								<div className='db3js inter-medium-black-16px'>
									DB3js
								</div>
								<div className='quickly-integrate-database-access inter-normal-black-14px'>
									Quickly integrate database access
								</div>
							</div>
							<div className='group-60'>
								<div className='logodms'>
									<img
										className='regular-s'
										src='/static/img/regular-s-2@2x.png'
										alt='Regular-S'
									/>
								</div>
								<div className='dms inter-medium-black-16px'>
									DMS
								</div>
								<div className='manage-data-access inter-normal-black-14px'>
									Manage data access
								</div>
							</div>
							<div className='group-59'>
								<div className='logo-browser logo-3'>
									<img
										className='regular-s-1'
										src='/static/img/regular-s-3@2x.png'
										alt='Regular-S'
									/>
								</div>
								<div className='browser-on-chain inter-medium-black-16px'>
									Browser on Chain
								</div>
								<p className='track-data-read-and-write inter-normal-black-14px'>
									Track data read and write
								</p>
							</div>
						</div>
					</div>
					<div className='how'>
						<p className='how-to-change-d-app-structure-with-db3 inter-semi-bold-black-26px'>
							How to change dAPP structure with DB3
						</p>
						<p className='make-apps-more-decen inter-normal-black-16px'>
							Make apps more decentralised without sacrificing the
							development experience, Blockchain and Database as
							back-end service for you dApps. DB3 allow you to
							quickly build a fully decentralized application
							instead of web2.5
						</p>
						<div className='group-40'>
							<div className='vs-before'>
								<div className='overlap-group6'>
									<div className='before'>Before</div>
									<p className='need-to-rely-on-a-ce'>
										Need to rely on a centralized database
										and maintain your own servers prevents
										the core data portion of the application
										from being decentralized
									</p>
									<div className='overlap-group5'>
										<img
											className='ellipse-20'
											src='/static/img/ellipse-20.png'
											alt='Ellipse 20'
										/>
										<img
											className='ellipse-19-1 ellipse-19-3'
											src='/static/img/ellipse-19.png'
											alt='Ellipse 19'
										/>
										<div className='web-2 web inter-light-white-10-9px'>
											WEB 2
										</div>
										<div className='web-3 web inter-light-white-10-9px'>
											WEB 3
										</div>
										<div className='overlap-group1-2'>
											<div className='overlap-group2-1'>
												<div className='overlap-group-3'>
													<div className='rectangle-12-1 rectangle-12-3'></div>
													<div className='rectangle-10'></div>
													<div className='rectangle-11-1 rectangle-11-3'></div>
												</div>
												<img
													className='subtract-8'
													src='/static/img/subtract@2x.png'
													alt='Subtract'
												/>
											</div>
											<div className='dapp-1 dapp-3 inter-medium-white-8-7px'>
												DAPP
											</div>
										</div>
										<img
											className='ellipse-13-2'
											src='/static/img/ellipse-13@2x.png'
											alt='Ellipse 13'
										/>
										<div className='backend-server inter-medium-white-8-7px'>
											Backend Server
										</div>
										<img
											className='ellipse-13-3'
											src='/static/img/ellipse-13-1@2x.png'
											alt='Ellipse 13'
										/>
										<div className='my-salpg-mobgodb inter-medium-white-8-7px'>
											MySAL/PG/Mobgodb
										</div>
										<div className='overlap-group3'>
											<div className='overlap-group'>
												<img
													className='subtract'
													src='/static/img/subtract-1@2x.png'
													alt='Subtract'
												/>
												<img
													className='le9-zx3-q95-o9-lu-1'
													src='/static/img/le9zx3q95o9lu-1@2x.png'
													alt='LE9ZX3Q95O9LU 1'
												/>
											</div>
											<div className='ethereum-1 ethereum-3 inter-medium-white-8-7px'>
												Ethereum
											</div>
										</div>
										<div className='overlap-group4'>
											<div className='overlap-group-4'>
												<img
													className='subtract-1'
													src='/static/img/subtract-2@2x.png'
													alt='Subtract'
												/>
												<img
													className='filecoin-1'
													src='/static/img/filecoin-1@2x.png'
													alt='Filecoin 1'
												/>
											</div>
											<div className='filecoin-2 inter-medium-white-8-7px'>
												Filecoin
											</div>
										</div>
										<img
											className='line-10-1 line-10-3'
											src='/static/img/line-10@2x.png'
											alt='Line 10'
										/>
										<img
											className='line-11'
											src='/static/img/line-11@2x.png'
											alt='Line 11'
										/>
										<img
											className='vector-8'
											src='/static/img/vector-8@2x.png'
											alt='Vector 8'
										/>
										<img
											className='vector-9'
											src='/static/img/vector-9@2x.png'
											alt='Vector 9'
										/>
										<div className='token-management-1 token-management-3 inter-medium-white-6-6px'>
											Token Management
										</div>
										<div className='static-file-management-1 static-file-management-3 inter-medium-white-6-6px'>
											Static File Management
										</div>
										<div className='app-level-dynamic-data inter-medium-white-6-6px'>
											APP Level
											<br />
											Dynamic Data
										</div>
									</div>
								</div>
							</div>
							<div className='vs-after'>
								<div className='overlap-group7'>
									<div className='after'>After</div>
									<p className='instead-of-a-central'>
										Instead of a centralized database,Use a
										decentralized database, DB3, to make
										your application more censor-resistant
									</p>
									<div className='overlap-group5-1'>
										<img
											className='ellipse-19-2 ellipse-19-3'
											src='/static/img/ellipse-19-1.png'
											alt='Ellipse 19'
										/>
										<img
											className='ellipse-18-2'
											src='/static/img/ellipse-18.png'
											alt='Ellipse 18'
										/>
										<img
											className='vector-6-1'
											src='/static/img/vector-6@2x.png'
											alt='Vector 6'
										/>
										<img
											className='vector-7-1'
											src='/static/img/vector-7@2x.png'
											alt='Vector 7'
										/>
										<div className='overlap-group-5'>
											<div className='overlap-group1-3'>
												<img
													className='union-3'
													src='/static/img/union-3@2x.png'
													alt='Union'
												/>
												<img
													className='subtract-9'
													src='/static/img/subtract-4@2x.png'
													alt='Subtract'
												/>
											</div>
											<div className='db3-2 inter-medium-white-8-7px'>
												DB3
											</div>
										</div>
										<img
											className='ellipse-17-3'
											src='/static/img/ellipse-17@2x.png'
											alt='Ellipse 17'
										/>
										<img
											className='ellipse-14-2'
											src='/static/img/ellipse-14-1@2x.png'
											alt='Ellipse 14'
										/>
										<img
											className='subtract-10'
											src='/static/img/subtract-3@2x.png'
											alt='Subtract'
										/>
										<div className='dapp-2 dapp-3 inter-medium-white-8-7px'>
											DAPP
										</div>
										<div className='web-3-1 inter-light-white-10-9px'>
											WEB 3
										</div>
										<div className='overlap-group2-2'>
											<div className='overlap-group'>
												<img
													className='subtract'
													src='/static/img/subtract-5@2x.png'
													alt='Subtract'
												/>
												<img
													className='le9-zx3-q95-o9-lu-1'
													src='/static/img/le9zx3q95o9lu-1-1@2x.png'
													alt='LE9ZX3Q95O9LU 1'
												/>
											</div>
											<div className='ethereum-2 ethereum-3 inter-medium-white-8-7px'>
												Ethereum
											</div>
										</div>
										<div className='overlap-group3-1'>
											<div className='overlap-group-6'>
												<img
													className='subtract-1'
													src='/static/img/subtract-6@2x.png'
													alt='Subtract'
												/>
												<img
													className='filecoin-1'
													src='/static/img/filecoin-1-1@2x.png'
													alt='Filecoin 1'
												/>
											</div>
											<div className='filecoin-3 inter-medium-white-8-7px'>
												Filecoin
											</div>
										</div>
										<img
											className='line-10-2 line-10-3'
											src='/static/img/line-10-1@2x.png'
											alt='Line 10'
										/>
										<div className='token-management-2 token-management-3 inter-medium-white-6-6px'>
											Token Management
										</div>
										<div className='static-file-management-2 static-file-management-3 inter-medium-white-6-6px'>
											Static File Management
										</div>
										<div className='data-management-1 inter-medium-white-6-6px'>
											Data <br />
											Management
										</div>
										<div className='overlap-group4-1'>
											<div className='rectangle-11-2 rectangle-11-3'></div>
											<div className='rectangle-12-2 rectangle-12-3'></div>
											<div className='rectangle-13-1'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='buttonsecondary-2 buttonsecondary-5 btn'>
							<div className='claim-gitpoap inter-normal-radical-red-16px'>
								View Document
							</div>
						</div>
					</div>
					<div className='database'>
						<div className='group-347'>
							<div className='decentralized-real-time-database inter-semi-bold-black-26px'>
								Decentralized real-time database
							</div>
							<p className='db3-is-a-decentraliz inter-normal-black-16px'>
								DB3 is a decentralized database network that
								anyone can use without permission, and it is
								very easy to control their own data, real-time
								data updates and query access
							</p>
						</div>
						<div className='view-container'>
							<div className='view'>
								<div className='rectangle-178'></div>
								<div className='mutable-document inter-medium-black-20px'>
									Mutable Document
								</div>
								<p className='the-data-stored-on-t inter-normal-black-14px'>
									The data stored on the db3 network are
									dynamic structured data that can be updated
									in real time
								</p>
							</div>
							<div className='view'>
								<div className='rectangle-178'></div>
								<div className='mutable-document inter-medium-black-20px'>
									Data Ownership
								</div>
								<p className='the-data-stored-on-t inter-normal-black-14px'>
									The data stored in DB3 Network is completely
									controlled by private key signature,No third
									party has control over the data.
								</p>
							</div>
							<div className='view'>
								<div className='rectangle-178'></div>
								<div className='mutable-document inter-medium-black-20px'>
									Data Programmable
								</div>
								<p className='the-data-stored-on-t inter-normal-black-14px'>
									Deploy complex data processing logic to the
									chain in a functional manner, which can make
									the data processing process open and
									transparent
								</p>
							</div>
							<div className='view'>
								<div className='rectangle-178'></div>
								<div className='mutable-document-1 inter-medium-black-20px'>
									Blazed Fast Read&amp;Wirte
								</div>
								<p className='the-data-stored-on-t inter-normal-black-14px'>
									db3 can provide high-performance data read
									and write services without losing the
									consensus security of the blockchain
								</p>
							</div>
						</div>
					</div>
					<div className='products'>
						<div className='group-345'>
							<p className='what-we-are-building-for-you inter-semi-bold-black-26px'>
								What we are building for you
							</p>
							<div className='group-343'>
								<div className='overlap-group4-2'>
									<img
										className='vector-1'
										src='/static/img/vector-1.png'
										alt='Vector 1'
									/>
									<div className='group-23'>
										<div className='logojs-1'>
											<img
												className='vector-2'
												src='/static/img/vector-2@2x.png'
												alt='Vector'
											/>
										</div>
										<div className='overlap-group1-4'>
											<div className='overlap-group-7'>
												<div className='rectangle-30'></div>
												<img
													className='rectangle-1'
													src='/static/img/rectangle-1.png'
													alt='Rectangle 1'
												/>
												<p className='fully-compatible-wit inter-normal-black-14px'>
													Fully compatible with
													firestore&#39;s interface,
													seamlessly migrate
												</p>
												<img
													className='image-10'
													src='/static/img/image-10.png'
													alt='image 10'
												/>
											</div>
											<p className='all-db3js-sd-ks-are-c inter-semi-bold-black-20px'>
												All DB3js SDKs are carefully
												designed to make developers
												lives easier
											</p>
											<div className='buttonsecondary-3 buttonsecondary-5 btn'>
												<div className='claim-gitpoap inter-normal-radical-red-16px'>
													Start Building with DB3js
												</div>
											</div>
											<div className='npm-one-click-installation inter-normal-black-14px'>
												npm one-click installation
											</div>
											<p className='interacts-with-db3-n inter-normal-black-14px'>
												Interacts with db3 network
												directly , and does not require
												an intermediate server
											</p>
											<p className='flexible-definition inter-normal-black-14px'>
												Flexible definition of data
												query index index
											</p>
											<p className='crud-the-data-in-the-front-end-directly inter-normal-black-14px'>
												CRUD the data in the front end
												directly
											</p>
											<p className='customize-data-schem inter-normal-black-14px'>
												Customize data schemas and
												create data storage protocols
												quickly
											</p>
											<p className='fully-compatible-wit-1 inter-normal-black-14px'>
												Fully compatible with Firebase
												interactive interface
											</p>
										</div>
									</div>
									<div className='group-22'>
										<div className='logodms-1'>
											<img
												className='regular-s-2'
												src='/static/img/regular-s@2x.png'
												alt='Regular-S'
											/>
										</div>
										<div className='flex-col'>
											<div className='dms-1'>DMS</div>
											<p className='data-management-for-developers inter-semi-bold-black-20px'>
												Data&nbsp;&nbsp;management for
												developers
											</p>
											<div className='group-15 inter-normal-black-14px'>
												<p className='manage-the-forms-you'>
													Manage the forms you create
													on the admin platform
													visually
												</p>
												<p className='check-the-access-sta'>
													Check the access status of
													the statistics app
												</p>
												<p className='manage-your-own-defi'>
													Manage your own defined
													on-chain functions
												</p>
												<div className='user-address-authorization-management'>
													User address authorization
													management
												</div>
											</div>
											<div className='buttonsecondary btn'>
												<div className='claim-gitpoap inter-normal-radical-red-16px'>
													Try Database
												</div>
											</div>
										</div>
										<div className='overlap-group2-3'>
											<div className='rectangle-32'></div>
											<img
												className='rectangle-8'
												src='/static/img/rectangle-8.png'
												alt='Rectangle 8'
											/>
											<img
												className='image-11'
												src='/static/img/image-11.png'
												alt='image 11'
											/>
										</div>
									</div>
									<div className='db3js-1'>DB3js</div>
								</div>
								<div className='group-21'>
									<div className='logo-browser-1'>
										<img
											className='regular-s-3'
											src='/static/img/regular-s-1@2x.png'
											alt='Regular-S'
										/>
									</div>
									<div className='flex-col-1 flex-col-4'>
										<div className='browser-on-chain-1'>
											Browser on Chain
										</div>
										<p className='track-the-read-and-w inter-semi-bold-black-20px'>
											Track the read and write behavior of
											each data in time
										</p>
										<div className='group-16 inter-normal-black-14px'>
											<p className='display-the-data-of-the-whole-network'>
												Display the data of the whole
												network
											</p>
											<div className='dashbopard'>
												Dashbopard
											</div>
											<p className='record-for-block-and-tx'>
												Record for block and tx
											</p>
											<div className='validator-information'>
												Validator information
											</div>
										</div>
										<div className='buttonsecondary btn'>
											<div className='claim-gitpoap inter-normal-radical-red-16px'>
												Try Browser
											</div>
										</div>
									</div>
									<div className='overlap-group3-2'>
										<div className='rectangle-33'></div>
										<img
											className='image-7'
											src='/static/img/image-7.png'
											alt='image 7'
										/>
										<img
											className='image-12'
											src='/static/img/image-12.png'
											alt='image 12'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='multi-chain-supportable'>
						<div className='overlap-group7-1'>
							<div className='multi-chain-supportable-1'>
								Multi-Chain Supportable
							</div>
							<p className='as-a-data-storage-ne inter-normal-black-16px'>
								As a data storage network, db3 relies on
								blockchain consensus to ensure the security of
								data reading and writing without permission or
								trust. But, db3 never intends to build from
								scratch, but to stand on the shoulders of giants
								and establish an organic link with the existing
								public chain ecology. DB3 uses existing public
								chains for token management and fee settlement,
								DB3 can and plans to combine with many public
								chains
							</p>
							<div className='flex-row-1'>
								<img
									className='file-ethereum-logo-2014-1-1'
									src='/static/img/fileethereum-logo-2014-1@2x.png'
									alt='FileEthereum logo 2014 1'
								/>
								<img
									className='bnb-1'
									src='/static/img/bnb-1@2x.png'
									alt='BNB 1'
								/>
								<img
									className='mask-group'
									src='/static/img/mask-group@2x.png'
									alt='Mask group'
								/>
							</div>
							<div className='image-container'>
								<img
									className='image-30'
									src='/static/img/image-30@2x.png'
									alt='image 30'
								/>
								<img
									className='image-31'
									src='/static/img/image-31@2x.png'
									alt='image 31'
								/>
								<img
									className='image-28'
									src='/static/img/image-28@2x.png'
									alt='image 28'
								/>
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
							<div className='cardtodo'>
								<div className='group-339'>
									<div className='group-337'>
										<div className='space-gray-container'>
											<img
												className='space-gray-13'
												src='/static/img/space-gray-13@2x.png'
												alt='Space Gray-13'
											/>
											<img
												className='space-gray'
												src='/static/img/space-gray@2x.png'
												alt='Space Gray'
											/>
										</div>
										<img
											className='space-gray-10'
											src='/static/img/space-gray-10@2x.png'
											alt='Space Gray-10'
										/>
									</div>
									<div className='group-336'>
										<div className='space-gray-container-1 space-gray-container-3'>
											<img
												className='space-gray-9'
												src='/static/img/space-gray-9@2x.png'
												alt='Space Gray-9'
											/>
											<img
												className='space-gray-1'
												src='/static/img/space-gray-1@2x.png'
												alt='Space Gray-1'
											/>
										</div>
										<img
											className='space-gray-4'
											src='/static/img/space-gray-10@2x.png'
											alt='Space Gray-4'
										/>
									</div>
									<div className='group-338'>
										<div className='space-gray-container-2 space-gray-container-3'>
											<img
												className='space-gray-12'
												src='/static/img/space-gray-12@2x.png'
												alt='Space Gray-12'
											/>
											<img
												className='space-gray-6'
												src='/static/img/space-gray-6@2x.png'
												alt='Space Gray-6'
											/>
										</div>
										<img
											className='space-gray-8'
											src='/static/img/space-gray-10@2x.png'
											alt='Space Gray-8'
										/>
									</div>
								</div>
							</div>
							<div className='card-social'>
								<div className='profile'>
									<div className='overlap-group5-2'>
										<div className='overlap-group-8'>
											<img
												className='unsplash8u-z-pyn-iu-r-q'
												src='/static/img/unsplash-8uzpyniu-rq@2x.png'
												alt='unsplash:8uZPynIu-rQ'
											/>
											<div className='background'></div>
										</div>
										<div className='card'>
											<img
												className='photos'
												src='/static/img/photos@2x.png'
												alt='Photos'
											/>
										</div>
										<img
											className='avatar-1'
											src='/static/img/avatar@2x.png'
											alt='Avatar'
										/>
										<div className='card-1'>
											<div className='frame'>
												<div className='follow'>
													<div className='x1k poppins-bold-black-4-6px'>
														1k
													</div>
													<div className='followers poppins-normal-black-4px'>
														Followers
													</div>
												</div>
												<div className='follow'>
													<div className='number-1 poppins-bold-black-4-6px'>
														342
													</div>
													<div className='following poppins-normal-black-4px'>
														Following
													</div>
												</div>
											</div>
											<div className='catherine13 poppins-bold-black-4-6px'>
												@Catherine13
											</div>
											<p className='my-name-is-catherine'>
												My name is Catherine. I like
												dancing in the rain and
												travelling all around the world.
											</p>
											<div className='button'>
												<div className='follow-1'>
													<div className='follow-2'>
														Follow
													</div>
												</div>
												<div className='message'>
													<div className='message-1'>
														Message
													</div>
												</div>
											</div>
											<div className='categories'>
												<div className='categories-item'>
													<div className='frame-33'>
														<div className='all poppins-normal-black-4px'>
															All
														</div>
														<div className='rectangle-176'></div>
													</div>
												</div>
												<div className='categories-item'>
													<div className='frame-33'>
														<div className='photos-1 poppins-normal-black-4px'>
															Photos
														</div>
														<div className='ellipse-8'></div>
													</div>
												</div>
												<div className='videos'>
													<div className='frame-33'>
														<div className='videos-1 poppins-normal-black-4px'>
															Videos
														</div>
														<div className='ellipse-8'></div>
													</div>
												</div>
											</div>
										</div>
										<div className='top-navigation'>
											<div className='top-navigation-item'>
												<div className='iconly-light-arrow-left'></div>
											</div>
											<div className='top-navigation-item'>
												<div className='iconly-bold'>
													<div className='message-2'></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='home-screen'>
									<div className='status-bar'>
										<div className='time-style'>
											<div className='time'>9:41</div>
										</div>
										<img
											className='cellular-connection'
											src='/static/img/cellular-connection@2x.png'
											alt='Cellular Connection'
										/>
										<img
											className='wifi'
											src='/static/img/wifi@2x.png'
											alt='Wifi'
										/>
										<div className='battery'>
											<div className='overlap-group-9'>
												<div className='capacity'></div>
											</div>
											<img
												className='cap'
												src='/static/img/cap@2x.png'
												alt='Cap'
											/>
										</div>
									</div>
									<div className='frame-240'>
										<div className='x-button'>
											<img
												className='camera'
												src='/static/img/camera@2x.png'
												alt='Camera'
											/>
										</div>
										<div className='explore'>Explore</div>
										<div className='x-button'>
											<img
												className='combo-shape'
												src='/static/img/combo-shape-1@2x.png'
												alt='Combo shape'
											/>
										</div>
									</div>
									<div className='stories'>
										<div className='stories-item'>
											<div className='aatar-1 aatar-4'>
												<div className='overlap-group-10'>
													<img
														className='huge-icon'
														src='/static/img/huge-icon-5@2x.png'
														alt='Huge-icon'
													/>
												</div>
											</div>
											<div className='frame-241'>
												<div className='you poppins-semi-bold-black-4px'>
													You
												</div>
											</div>
										</div>
										<div className='stories-item'>
											<div className='aatar-2 aatar-4'>
												<img
													className='unsplashi-lip77-sbm-oe'
													src='/static/img/unsplash-ilip77sbmoe@2x.png'
													alt='unsplash:ILip77SbmOE'
												/>
											</div>
											<div className='frame-241-1'>
												<div className='name poppins-semi-bold-black-4px'>
													Benjamin
												</div>
											</div>
										</div>
										<div className='stories-item'>
											<div className='aatar'>
												<div className='overlap-group-11'>
													<img
														className='huge-icon'
														src='/static/img/huge-icon-8@2x.png'
														alt='Huge-icon'
													/>
												</div>
											</div>
											<div className='frame-241-1'>
												<div className='farita poppins-semi-bold-black-4px'>
													Farita
												</div>
											</div>
										</div>
										<div className='stories-item'>
											<div className='aatar'>
												<div className='overlap-group-12'>
													<img
														className='huge-icon'
														src='/static/img/huge-icon-8@2x.png'
														alt='Huge-icon'
													/>
												</div>
											</div>
											<div className='frame-241'>
												<div className='name-1 name-4 poppins-semi-bold-black-4px'>
													Marie
												</div>
											</div>
										</div>
										<div className='stories-item'>
											<div className='aatar-3 aatar-4'>
												<img
													className='unsplash_h6wpor9mjs'
													src='/static/img/unsplash--h6wpor9mjs@2x.png'
													alt='unsplash:_H6wpor9mjs'
												/>
												<img
													className='huge-icon-1'
													src='/static/img/space-gray-10@2x.png'
													alt='Huge-icon'
												/>
											</div>
											<div className='frame-241'>
												<div className='name-2 name-4 poppins-semi-bold-black-4px'>
													Claire
												</div>
											</div>
										</div>
									</div>
									<div className='card-2'>
										<div className='avatar-2'>
											<div className='avatar'>
												<img
													className='unsplash_h6wpor9mjs-1'
													src='/static/img/unsplash--h6wpor9mjs-1@2x.png'
													alt='unsplash:_H6wpor9mjs'
												/>
											</div>
											<div className='name-3 name-4'>
												<span className='span0'>
													Claire Dangais
													<br />
												</span>
												<span className='span1'>
													@ClaireD15
												</span>
											</div>
										</div>
										<div className='overlap-group1-5'>
											<img
												className='unsplashm-bq-if-klvow-m'
												src='/static/img/unsplash-mbqifklvowm@2x.png'
												alt='unsplash:mBQIfKlvowM'
											/>
											<div className='frame-242'>
												<div className='frame-247'>
													<div className='frame-246'>
														<div className='frame-24'>
															<div className='icon'>
																<div className='chat'></div>
															</div>
															<div className='number poppins-semi-bold-white-5-2px'>
																10
															</div>
														</div>
														<div className='frame-24'>
															<img
																className='icon-1'
																src='/static/img/huge-icon@2x.png'
																alt='Huge-icon'
															/>
															<div className='number poppins-semi-bold-white-5-2px'>
																122
															</div>
														</div>
													</div>
													<div className='frame-24'>
														<img
															className='icon-1'
															src='/static/img/iconly-bold-send@2x.png'
															alt='Iconly/Bold/Send'
														/>
														<img
															className='icon-1'
															src='/static/img/huge-icon-1@2x.png'
															alt='Huge-icon'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='overlap-group4-3'>
										<div className='card-3'>
											<img
												className='unsplashwlx-j4id-mt-uk'
												src='/static/img/space-gray-10@2x.png'
												alt='unsplash:wlxJ4idMTUk'
											/>
											<div className='frame-248'>
												<div className='avatar'>
													<img
														className='unsplashj1-o-scm_u-huq'
														src='/static/img/space-gray-10@2x.png'
														alt='unsplash:J1OScm_uHUQ'
													/>
												</div>
												<div className='farita-smith-smith-fa'>
													<span className='span0'>
														Farita Smith
														<br />
													</span>
													<span className='span1'>
														@SmithFa
													</span>
												</div>
											</div>
											<div className='frame-242-1'>
												<div className='frame-247-1'>
													<div className='frame-246'>
														<div className='frame-24'>
															<div className='icon'>
																<div className='chat-1'>
																	<img
																		className='chat-2'
																		src='/static/img/space-gray-10@2x.png'
																		alt='Chat'
																	/>
																</div>
															</div>
															<div className='number poppins-semi-bold-white-5-2px'>
																20
															</div>
														</div>
														<div className='frame-24'>
															<img
																className='huge-icon-2'
																src='/static/img/space-gray-10@2x.png'
																alt='Huge-icon'
															/>
															<div className='number poppins-semi-bold-white-5-2px'>
																453
															</div>
														</div>
													</div>
													<div className='frame-24'>
														<img
															className='iconly-bold-send iconly-bold'
															src='/static/img/space-gray-10@2x.png'
															alt='Iconly/Bold/Send'
														/>
														<img
															className='huge-icon-3'
															src='/static/img/space-gray-10@2x.png'
															alt='Huge-icon'
														/>
													</div>
												</div>
											</div>
										</div>
										<div className='tab-bar'>
											<div className='overlap-group3-3'>
												<div className='rectangle-177'></div>
												<div className='icons'>
													<div className='homeame-38'>
														<img
															className='huge-icon-4'
															src='/static/img/space-gray-10@2x.png'
															alt='Huge-icon'
														/>
													</div>
													<div className='message-3'>
														<img
															className='huge-icon-5'
															src='/static/img/space-gray-10@2x.png'
															alt='Huge-icon'
														/>
													</div>
													<div className='icons-item'>
														<div className='text-1'>
															􀅼
														</div>
													</div>
													<div className='icons-item'>
														<div className='icon'>
															<div className='user'>
																<img
																	className='combo-shape-1 combo-shape-3'
																	src='/static/img/space-gray-10@2x.png'
																	alt='Combo shape'
																/>
															</div>
														</div>
													</div>
													<div className='icons-item'>
														<div className='icon'>
															<div className='notification'>
																<img
																	className='combo-shape-2 combo-shape-3'
																	src='/static/img/space-gray-10@2x.png'
																	alt='Combo shape'
																/>
															</div>
														</div>
													</div>
												</div>
												<div className='home-indicator'>
													<div className='home-indicator-1'></div>
												</div>
											</div>
											<div className='grou-container'>
												<img
													className='background-1'
													src='/static/img/space-gray-10@2x.png'
													alt='Background'
												/>
												<div className='overlap-group-13'>
													<img
														className='huge-icon-6'
														src='/static/img/space-gray-10@2x.png'
														alt='Huge-icon'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='cardnft'>
								<img
									className='nft-1'
									src='/static/img/nft-1@2x.png'
									alt='NFT 1'
								/>
							</div>
							<div className='card-more'>
								<div className='overlap-group6-1'>
									<div className='any-data-heavy-d-app'>
										<span className='span0-3'>
											Any
											<br />
										</span>
										<span className='span1-2'>
											Data-heavy dAPP
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='flex-row-2 inter-semi-bold-black-16px'>
							<div className='todo-list'>TODO List</div>
							<p className='decentralized-social decentralized'>
								Decentralized social networking and forums
							</p>
							<div className='dynamic-nft'>Dynamic NFT</div>
							<div className='place'>More</div>
						</div>
						<div className='buttonsecondary-4 buttonsecondary-5 btn'>
							<p className='claim-gitpoap inter-normal-radical-red-16px'>
								Check more&nbsp;&nbsp;Best practice in Community
							</p>
						</div>
					</div>
					<div className='footer'>
						<div className='footer-1'>
							<div className='overlap-group-14'>
								<div className='community-forum-twitter-discord inter-bold-black-18px'>
									<span className='inter-bold-black-18px'>
										Community
										<br />
									</span>
									<span className='span1-1'>
										Forum
										<br />
										Twitter
										<br />
										Discord
									</span>
								</div>
								<div className='group-19'>
									<div className='flex-row-3 inter-bold-black-18px'>
										<div className='flex-col-2 flex-col-4'>
											<div className='logo-2 logo-3'>
												<img
													className='union-4'
													src='/static/img/union-1@2x.png'
													alt='Union'
												/>
												<img
													className='db3-3'
													src='/static/img/db3@2x.png'
													alt='DB3'
												/>
											</div>
											<div className='group-17'>
												<div className='icon-twitter'></div>
												<img
													className='icon-github'
													src='/static/img/---icon--github-@3x.png'
													alt='icon &#34;github&#34;'
												/>
												<img
													className='icon-youtube'
													src='/static/img/---icon--youtube-@3x.png'
													alt='icon-youtube'
												/>
												<img
													className='icon-discord'
													src='/static/img/---icon--discord-@3x.png'
													alt='icon &#34;discord&#34;'
												/>
											</div>
										</div>
										<div className='products-decentraliz'>
											<span className='inter-bold-black-18px'>
												Products
												<br />
											</span>
											<span className='span1-3'>
												Decentralized Database
												<br />
												DB3js
												<br />
												Database management
												<br />
												Explorer
											</span>
										</div>
										<div className='developers-documents-github'>
											<span className='inter-bold-black-18px'>
												Developers
												<br />
											</span>
											<span className='span1-1'>
												Documents
												<br />
												github
											</span>
										</div>
									</div>
									<div className='flex-col-3 flex-col-4'>
										<img
											className='line-2'
											src='/static/img/line-2.png'
											alt='Line 2'
										/>
										<p className='copyright-db3-team'>
											Copyright @ DB3 Team | All Rights
											Reserved
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
