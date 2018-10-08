
let head = document.getElementsByTagName('head')[0]

let link = document.createElement("link")
link.setAttribute("rel", "stylesheet")
link.setAttribute("type", "text/css")
link.setAttribute("href", "styles.css")
head.appendChild(link)



let containerName = document.getElementById('container')


let navBar = document.createElement('div')
navBar.className = "blue"
let title = document.createElement('h1')
title.textContent="HighOnCoding"
let home = document.createElement('h2')
home.textContent = "Home"
let categories = document.createElement('h2')
categories.textContent = "Categories"
navBar.append(title)
navBar.append(home)
navBar.append(categories)
containerName.append(navBar)

let reviews = document.createElement('div')
reviews.className = "gray"
let cursetitle = document.createElement('h1')
cursetitle.textContent = "Curse of the Current Reviews"
let cursePara = document.createElement('h2')
cursePara.textContent ="When you want to buy any applicatioin from the Apple iTunes store you hangle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of you webpage. Their choice is dependent on three important factors price, screeshot and reviews."
reviews.append(cursetitle)
reviews.append(cursePara)
containerName.append(reviews)

let watchKit = document.createElement('div')
let hello = document.createElement('h1')
hello.className ="HelloIntro"
hello.textContent = "Hello WatchKit"
let watchPara = document.createElement('h2')
watchPara.textContent = " Last month Apple released the anticipated Watchkit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basis of getting started with the WatchKit framework and developing apps for the Apple Watch."
watchKit.append(hello)
watchKit.append(watchPara)
containerName.append(watchKit)

// let comments = document.createElement('div')
// comments.textContent

let swift = document.createElement('div')
let Intro = document.createElement('h1')
Intro.className = "HelloIntro"
Intro.textContent = "Introduction to Swift"
let swiftPara = document.createElement('h2')
swiftPara.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
swift.append(Intro)
swift.append(swiftPara)
containerName.append(swift)
