(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[166],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7925:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s={},i={unversionedId:"guides/Developers/testnet_mn",id:"guides/Developers/testnet_mn",isDocsHomePage:!1,title:"Testnet Masternode Setup Guide",description:"Please enable coin control and show masternode tab from the options.",source:"@site/docs/guides/Developers/testnet_mn.mdx",sourceDirName:"guides/Developers",slug:"/guides/Developers/testnet_mn",permalink:"/docs/guides/Developers/testnet_mn",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testnet Setup",permalink:"/docs/guides/Developers/testnet"},next:{title:"Deploying Smart Contracts with Truffle",permalink:"/docs/guides/Developers/truffle"}},l=[{value:"Note: If using an Operator to host your node you now need to follow their instructions. The following applies to self hosted nodes.",id:"note-if-using-an-operator-to-host-your-node-you-now-need-to-follow-their-instructions-the-following-applies-to-self-hosted-nodes",children:[]},{value:"SET UP VPS",id:"set-up-vps",children:[{value:"Log onto your Server using Putty as Root.",id:"log-onto-your-server-using-putty-as-root",children:[]}]},{value:"Check Blocks",id:"check-blocks",children:[{value:"Note if using an existing address with seniority you will have to manually \u2018lock\u2019 the collateral until after you have registered the MN.",id:"note-if-using-an-existing-address-with-seniority-you-will-have-to-manually-lock-the-collateral-until-after-you-have-registered-the-mn",children:[]}]},{value:"Identify the funding transaction",id:"identify-the-funding-transaction",children:[]},{value:"Generate a BLS key pair",id:"generate-a-bls-key-pair",children:[]},{value:"Add the secret key to your masternode configuration",id:"add-the-secret-key-to-your-masternode-configuration",children:[]},{value:"Prepare a ProRegTx transaction",id:"prepare-a-proregtx-transaction",children:[]},{value:"Sign the ProRegTx transaction",id:"sign-the-proregtx-transaction",children:[]},{value:"Submit the signed message",id:"submit-the-signed-message",children:[]}],d={toc:l};function p(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Please enable coin control and show masternode tab from the options."),(0,o.kt)("h3",{id:"note-if-using-an-operator-to-host-your-node-you-now-need-to-follow-their-instructions-the-following-applies-to-self-hosted-nodes"},"Note: If using an Operator to host your node you now need to follow their instructions. The following applies to self hosted nodes."),(0,o.kt)("h2",{id:"set-up-vps"},"SET UP VPS"),(0,o.kt)("h3",{id:"log-onto-your-server-using-putty-as-root"},"Log onto your Server using Putty as Root."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"**All text in boxes are commands and need to be typed (Copy/Paste into Putty followed by Enter.**\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install Nano (Text editor)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install nano\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manual Install")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Open ports/enable firewalls etc.apt install ufw python virtualenv git unzip pv -y\nufw allow ssh/tcp \nufw limit ssh/tcp \nufw allow 18369/tcp \nufw allow 30303/tcp \nufw logging on \nufw enable\n")),(0,o.kt)("p",null,"Install Swap file if you have only 4gb Memory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fallocate -l 4G /swapfile\nchmod 600 /swapfile\nmkswap /swapfile\nswapon /swapfile\nnano /etc/fstab\n")),(0,o.kt)("p",null,"Add the following line at the end of the file, then press ",(0,o.kt)("strong",{parentName:"p"},"Ctrl + X")," to close the editor, then ",(0,o.kt)("strong",{parentName:"p"},"Y")," and ",(0,o.kt)("strong",{parentName:"p"},"Enter")," save the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/swapfile none swap sw 0 0\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install Syscoin Binaries :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://github.com/syscoin/syscoin/releases/download/v4.3.0rc2/syscoin-4.3.0rc2-x86_64-linux-gnu.tar.gz\ntar xf syscoin-4.3.0rc2-x86_64-linux-gnu.tar.gz\nsudo install -m 0755 -o root -g root -t /usr/local/bin syscoin-4.3.0rc2/bin/*\nrm -r syscoin-4.3.0rc2\nmkdir ~/.syscoin\n")),(0,o.kt)("p",null,"We need to create the config file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nano ~/.syscoin/syscoin.conf\n")),(0,o.kt)("p",null,"Paste in the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testnet=1\n[test]\nrpcuser=user\nrpcpassword=password\nlisten=1\ndaemon=1\nserver=1\nassetindex=1\nport=18369\nrpcport=18370\nrpcallowip=127.0.0.1\naddnode=54.190.239.153\naddnode=52.40.171.92\n")),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Ctrl + X")," to close the editor and ",(0,o.kt)("strong",{parentName:"p"},"Y")," and ",(0,o.kt)("strong",{parentName:"p"},"Enter")," save the file"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run Syscoin Core")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"syscoind\n")),(0,o.kt)("h2",{id:"check-blocks"},"Check Blocks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"syscoin-cli getblockchaininfo\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install Sentinel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get -y install git python3 virtualenv   ## note this says python3\ngit clone https://github.com/syscoin/sentinel.git\ncd sentinel\ngit checkout dev-4.x\nvirtualenv -p $(which python3) ./venv\n./venv/bin/pip install -r requirements.txt\n")),(0,o.kt)("p",null,"We now need to edit the sentinel config file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nano sentinel.conf\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If there is a # In front of syscoin_conf= then remove it and change it to syscoin_conf=/root/.syscoin/syscoin.conf"),(0,o.kt)("li",{parentName:"ol"},"Put a # next to network=mainnet and remove the # next to network=testnet to enable testnet version of sentinel.")),(0,o.kt)("p",null,"Save"),(0,o.kt)("p",null,"Should look like this"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(32858).Z})),(0,o.kt)("p",null,"Finish Sentinel setup"),(0,o.kt)("p",null,"Create a crontab entry to wake sentinel every 5 minutes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crontab -e\n")),(0,o.kt)("p",null,"Please wait and select Nano as the option if this is the first time you have done this and add this line to the end of the file, including * * * * *"),(0,o.kt)("p",null,"*"," * * * * cd /root/sentinel && ./venv/bin/python bin/sentinel.py 2>&1 >> sentinel-cron.log"),(0,o.kt)("p",null,"To Start Syscoind automatically on boot you can add this line."),(0,o.kt)("p",null,"//Thanks to Locutus"),(0,o.kt)("p",null,"@reboot /usr/local/bin/syscoind -daemon >/dev/null 2>&1"),(0,o.kt)("p",null,"Save"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SETUP THE MASTERNODE.")),(0,o.kt)("p",null,"Return to QT"),(0,o.kt)("h3",{id:"note-if-using-an-existing-address-with-seniority-you-will-have-to-manually-lock-the-collateral-until-after-you-have-registered-the-mn"},"Note if using an existing address with seniority you will have to manually \u2018lock\u2019 the collateral until after you have registered the MN."),(0,o.kt)("p",null,"Note the masternode.config file is no longer used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"More than one masternode can not share the same collateral address, ownerKeyAddress or votingKeyAddress and payout address cannot be the same as owner or voting addresses.")),(0,o.kt)("p",null,"Create a new address for collateral this does not need to be a legacy address anymore, or use an existing seniority address. This address can also be in an offline wallet that has signing capabilities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getnewaddress mn1\n")),(0,o.kt)("p",null,"Send exactly 100,000 tsys to this address"),(0,o.kt)("h2",{id:"identify-the-funding-transaction"},"Identify the funding transaction"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Window> Console")," and enter the following command:"),(0,o.kt)("p",null,"Note some commands now require an underscore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"masternode_outputs\n")),(0,o.kt)("p",null,"This should return a string of characters similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "3304a4920f20e1e5cd1f34e5396556ded1e603296f7c5dd66c7ec4fe63cb008d": "0"\n}\n')),(0,o.kt)("p",null,"The first long string is your ",(0,o.kt)("inlineCode",{parentName:"p"},"collateralHash"),", while the last number is the ",(0,o.kt)("inlineCode",{parentName:"p"},"collateralIndex"),"."),(0,o.kt)("h2",{id:"generate-a-bls-key-pair"},"Generate a BLS key pair"),(0,o.kt)("p",null,"A public/secret BLS key pair is required to operate a masternode. The secret key is specified on the masternode itself, and allows it to be included in the deterministic masternode list once a provider registration transaction with the corresponding public key has been created."),(0,o.kt)("p",null,"If you are using a hosting service, they may provide you with their public key, and you can skip this step. If you are hosting your own masternode or have agreed to provide your host with the BLS secret key, generate a BLS public/secret keypair in the Console and entering the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'bls_generate{\n  "secret": "1a8f477d2b02650b7d159efe315940f05252334eb292376309386cc99b0c4ec7",\n  "public": "05afc5f75d0a215951677703e41a108a67f2efb31110e392d988dbd4f9e8446a3336d59de1ff886ec0d3c65c822af2de"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"These keys are NOT stored by the wallet and must be kept secure, similar to the value provided in the past by the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"masternode genkey")," ",(0,o.kt)("strong",{parentName:"p"},"command.")),(0,o.kt)("h2",{id:"add-the-secret-key-to-your-masternode-configuration"},"Add the secret key to your masternode configuration"),(0,o.kt)("p",null,"The public key will be used in following steps. The secret key must be entered in the ",(0,o.kt)("inlineCode",{parentName:"p"},"syscoin.conf")," file on the masternode. This allows the masternode to watch the blockchain for relevant Pro*Tx transactions, and will cause it to start serving as a masternode when the signed ProRegTx is broadcast by the owner (final step below). Log in to your masternode using ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," or PuTTY and edit the configuration file as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nano ~/.syscoin/syscoin.conf\n")),(0,o.kt)("p",null,"The editor appears with the existing configuration. Add this line in the file, replacing the key with your BLS secret key generated above (excluding \u201c \u201d) and also add your VPS external address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"masternodeblsprivkey=1a8f477d2b02650b7d159efe315940f05252334eb292376309386cc99b0c4ec7\nexternalip=123.123.123.123\n")),(0,o.kt)("p",null,"Press enter to make sure there is a blank line at the end of the file, then press ",(0,o.kt)("strong",{parentName:"p"},"Ctrl + X")," to close the editor and ",(0,o.kt)("strong",{parentName:"p"},"Y")," and ",(0,o.kt)("strong",{parentName:"p"},"Enter")," save the file. Note that providing a ",(0,o.kt)("inlineCode",{parentName:"p"},"masternodeblsprivkey")," enables masternode mode, which will automatically force the ",(0,o.kt)("inlineCode",{parentName:"p"},"txindex=1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"peerbloomfilters=1"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"prune=0")," settings necessary to provide masternode service. We now need to restart the masternode for this change to take effect. Enter the following commands, waiting a few seconds in between to give Syscoin time to shut down making sure you are in the root directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"syscoin-cli stop\nsleep 5\nsyscoind\n")),(0,o.kt)("p",null,"We will now prepare the transaction used to register the masternode on the network."),(0,o.kt)("h2",{id:"prepare-a-proregtx-transaction"},"Prepare a ProRegTx transaction"),(0,o.kt)("p",null,"A pair of BLS keys for the operator were already generated above, and the secret key was entered on the masternode. The public key is used in this transaction as the ",(0,o.kt)("inlineCode",{parentName:"p"},"operatorPubKey"),"."),(0,o.kt)("p",null,"First, we need to get a new, unused address from the wallet to serve as the ",(0,o.kt)("strong",{parentName:"p"},"owner key address")," (",(0,o.kt)("inlineCode",{parentName:"p"},"ownerKeyAddr"),"). This is not the same as the collateral address holding 100000 Sys. This address must be different for each MN. Generate a new address as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getnewaddress mn1-ownertsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0\n")),(0,o.kt)("p",null,"This address can also be used as the ",(0,o.kt)("strong",{parentName:"p"},"voting key address")," (",(0,o.kt)("inlineCode",{parentName:"p"},"votingKeyAddr"),"). Alternatively, you can specify an address provided to you by your chosen voting delegate, or simply generate a new voting key address as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getnewaddress mn1-votingtsys1q9aejtrvkrlnqsfeqanr5zhrttg8g8g\n")),(0,o.kt)("p",null,"Then either generate or choose an existing address to receive the ",(0,o.kt)("strong",{parentName:"p"},"owner\u2019s masternode payouts")," (",(0,o.kt)("inlineCode",{parentName:"p"},"payoutAddress"),"). This address cannot be the same as your owner or voting address, it is also possible to use an address external to the wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getnewaddress payoutstsys1quuu4ach5npjp3vpmaezzctc9r33405p39khz67\n")),(0,o.kt)("p",null,"You can also optionally generate and fund another address as the ",(0,o.kt)("strong",{parentName:"p"},"transaction fee source")," (",(0,o.kt)("inlineCode",{parentName:"p"},"feeSourceAddress"),"). If you selected an external payout address, you must specify a fee source address."),(0,o.kt)("p",null,"Either the payout address or fee source address must have enough balance to pay the transaction fee, or the ",(0,o.kt)("inlineCode",{parentName:"p"},"register_prepare")," transaction will fail."),(0,o.kt)("p",null,"The private keys to the owner and fee source addresses must exist in the wallet submitting the transaction to the network. If your wallet is protected by a password, it must now be unlocked to perform the following commands. Unlock your wallet for 5 minutes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"walletpassphrase yourSecretPassword 300\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To see a list of common errors for the registration process click")," ",(0,o.kt)("a",{parentName:"p",href:"https://bittyjohn1954.medium.com/syscoin-4-2-masternode-error-codes-df0b80828f5f"},(0,o.kt)("strong",{parentName:"a"},"https://bittyjohn1954.medium.com/syscoin-4-2-masternode-error-codes-df0b80828f5f"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can use the registration helper blow but will need tto edit the first command generate to change the port to 18369")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://syshub-dev.web.app/masternodes/masternode-registration"},"Syscoin MasternodesSysnode.info provides Syscoin Masternode Operators the tools to maximise the most from their Masternodes!syshub-dev.web.app")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manually")),(0,o.kt)("p",null,"We will now prepare an unsigned ProRegTx special transaction using the ",(0,o.kt)("inlineCode",{parentName:"p"},"protx_register_prepare")," command. This command has the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"protx_register_prepare collateralHash collateralIndex ipAndPort ownerKeyAddr\n  operatorPubKey votingKeyAddr operatorReward payoutAddress (feeSourceAddress)\n")),(0,o.kt)("p",null,"Open a text editor such as notepad ++to prepare this command. Replace each argument to the command as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"collateralHash"),": The txid of the 100000 Syscoin collateral funding transaction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"collateralIndex"),": The output index of the 100000 Syscoin funding transaction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ipAndPort"),": Masternode IP address and port, in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"x.x.x.x:yyyy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ownerKeyAddr"),": The Syscoin address generated above for the owner address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operatorPubKey"),": The BLS public key generated above (or provided by your hosting service)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"votingKeyAddr"),": The Syscoin address generated above, or the address of a delegate, used for proposal voting"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operatorReward"),": The percentage of the block reward allocated to the operator as payment, 0 for no reward."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payoutAddress"),": A Syscoin address to receive the owner\u2019s masternode rewards"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"feeSourceAddress"),": An (optional) address used to fund ProTx fee. ",(0,o.kt)("inlineCode",{parentName:"li"},"payoutAddress")," will be used if not specified.")),(0,o.kt)("p",null,"Note that the operator is responsible for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.dash.org/en/stable/masternodes/maintenance.html#dip3-update-service"},"specifying their own reward")," address in a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"update_service")," transaction if you specify a non-zero ",(0,o.kt)("inlineCode",{parentName:"p"},"operatorReward"),". The owner of the masternode collateral does not specify the operator\u2019s payout address."),(0,o.kt)("p",null,"Either the ",(0,o.kt)("inlineCode",{parentName:"p"},"feeSourceAddress")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"payoutAddress")," must hold a small balance since a standard transaction fee is involved."),(0,o.kt)("p",null,"Example (remove line breaks if copying):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Note in this example I will use the same address for owner and voting and i will have sent a small amount of tSys to the payoutAddress for fees as i am not using feeSourceAddress.(Remember to lock your collateral if using a seniority address)protx_register_prepare\n  3304a4920f20e1e5cd1f4e5396556ded1e603296f7c5dd66c7ec4fe63cb008d\n  0\n  161.97.140.65:18369\n  tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0\n  05afc5f75d0a215951677703e41a108a67f2efb31110e392d988dbd4f9e8446a3336d59de1ff886ec0d3c65c822af2de\n  tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0\n  0\n  tsys1quuu4ach5npjp3vpmaezzctc9r33405p39khz67\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "tx": "5000000000010163dc2d9a36a7a620386a23002ab6b8a2aba0956e7e047b73a6cf27d9d51571e80100000000feffffff020000000000000000d16a4cce0100000000008d00cb63fec47e6cd65d7c6f2903e6d1de566539e5341fcde5e1200f92a404330000000000000000000000000000ffffa1618f4447c12f73258d961fe6082720ecc7415d4ebebdadb37905afc5f75d0a215951677703e41a108a67f2efb31110e392d988dbd4f9e8446a3336d59de1ff886ec0d3c65c822af2de2f73258d961fe6082720ecc7415d4ebebdadb3790000160014e7395ee2f4986418b03bee442c2f051c6357d0318e95079d496ed43baba5101dab0ab5ace776ac1b0b7fcba7711a2504c9ea36610074c89a3b00000000160014279a7a94c83130b3eee07f2c66b2faa94b6cfe990247304402201f1e01ab33d4f388386ca5df94818674cf4b1909806c3a92ffc11ded88d84dfb02206d289cca1fbd19bc5154c85ec4f1eb3748f77071d863ae4f6aa18f56807f76e801210298a88bd8293e4d0248eb89f276cb54c26b3686ea4e17df155a22bfed2426862800000000",\n  "collateralAddress": "TB59KQk6WsMaJxkc8UB3hudjtGMqfeQWSG",\n  "signMessage": "tsys1quuu4ach5npjp3vpmaezzctc9r33405p39khz67|0|tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0|tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0|00def144051468bdb1a855f01bf9f022091c4c0ebc745d1ecc28ac418c9af2e0"\n}\n')),(0,o.kt)("p",null,"Next we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"collateralAddress")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"signMessage")," fields to sign the transaction, and the output of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," field to submit the transaction."),(0,o.kt)("h2",{id:"sign-the-proregtx-transaction"},"Sign the ProRegTx transaction"),(0,o.kt)("p",null,"We will now sign the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"signMessage")," (returned above) field using the public key for the collateral address as specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"collateralAddress"),". The wallet used to sign must hold the private key to the collateral address and note that no internet connection is required for this step, meaning that the wallet can remain disconnected from the internet in cold storage to sign the message. The command takes the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"signmessagebech32 collateralAddress signMessage\n")),(0,o.kt)("p",null,"Example: (excluding \u201c \u201d)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"signmessagebech32 TB59KQk6WsMaJxkc8UB3hudjtGMqfeQWSG tsys1quuu4ach5npjp3vpmaezzctc9r33405p39khz67|0|tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0|tsys1q9aejtrvkrlnqsfeqanr5zh2wh676mvmekj4hj0|00def144051468bdb1a855f01bf9f022091c4c0ebc745d1ecc28ac418c9af2e0\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"IGj1ORdk3yv/uAMKG+DZrBA/GTHX4dW8zn/rmMfGzOzCIaxqmyUbNveYtnqh9wLVECENMjyuyeR2VmB3ccNlRLw=\n")),(0,o.kt)("h2",{id:"submit-the-signed-message"},"Submit the signed message"),(0,o.kt)("p",null,"We will now submit the ProRegTx special transaction to the blockchain to register the masternode. This command must be sent from the wallet holding a balance on either the ",(0,o.kt)("inlineCode",{parentName:"p"},"feeSourceAddress")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"payoutAddress"),", since a standard transaction fee is involved. The command takes the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"protx_register_submit tx sig\n")),(0,o.kt)("p",null,"Where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tx"),": The serialized transaction previously returned in the ",(0,o.kt)("inlineCode",{parentName:"li"},"tx")," output field from the ",(0,o.kt)("inlineCode",{parentName:"li"},"protx_register_prepare")," command"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sig"),": The message returned from the ",(0,o.kt)("inlineCode",{parentName:"li"},"signmessagebech32")," command")),(0,o.kt)("p",null,"Example: (excluding \u201c \u201d)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"protx_register_submit 5000000000010163dc2d9a36a7a620386a23002ab6b8a2aba0956e7e047b73a6cf27d9d51571e80100000000feffffff020000000000000000d16a4cce0100000000008d00cb63fec47e6cd65d7c6f2903e6d1de566539e5341fcde5e1200f92a404330000000000000000000000000000ffffa1618f4447c12f73258d961fe6082720ecc7415d4ebebdadb37905afc5f75d0a215951677703e41a108a67f2efb31110e392d988dbd4f9e8446a3336d59de1ff886ec0d3c65c822af2de2f73258d961fe6082720ecc7415d4ebebdadb3790000160014e7395ee2f4986418b03bee442c2f051c6357d0318e95079d496ed43baba5101dab0ab5ace776ac1b0b7fcba7711a2504c9ea36610074c89a3b00000000160014279a7a94c83130b3eee07f2c66b2faa94b6cfe990247304402201f1e01ab33d4f388386ca5df94818674cf4b1909806c3a92ffc11ded88d84dfb02206d289cca1fbd19bc5154c85ec4f1eb3748f77071d863ae4f6aa18f56807f76e801210298a88bd8293e4d0248eb89f276cb54c26b3686ea4e17df155a22bfed2426862800000000 IGj1ORdk3yv/uAMKG+DZrBA/GTHX4dW8zn/rmMfGzOzCIaxqmyUbNveYtnqh9wLVECENMjyuyeR2VmB3ccNlRLw=\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"285fba6277586401f8efaf55d4eef7acfa6d690a30c0db7f213a0bb2c6194bd1\n")),(0,o.kt)("p",null,"Your masternode is now registered and will appear on the Deterministic Masternode List after the transaction is mined to a block. You can view this list on the ",(0,o.kt)("strong",{parentName:"p"},"Masternodes")," tab in QT, or in the console using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"protx_list valid"),", where the txid of the final ",(0,o.kt)("inlineCode",{parentName:"p"},"protx_register_submit")," transaction identifies your masternode."),(0,o.kt)("p",null,"At this point you can go back to your terminal window and monitor your masternode by entering"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"syscoin-cli masternode_status\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(2976).Z})),(0,o.kt)("p",null,"This information can also be seen by double clicking your masternode in QT"),(0,o.kt)("p",null,"Congratulations! Your masternode is now running."))}p.isMDXComponent=!0},2976:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mn_status-a059ddcb95c03732c31ca506e5df55f4.png"},32858:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sentinel_setup-4441edca06df1a11a24395cf6fbe27ca.png"}}]);