nodeppt - Probably the best web presentation tool so far!
==================================
中文说明：[README](./README.md)

[![NPM](https://nodei.co/npm-dl/nodeppt.png)](https://nodei.co/npm/nodeppt/)
[![NPM](https://nodei.co/npm/nodeppt.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nodeppt/)
[![Inline docs](http://inch-ci.org/github/ksky521/nodeppt.svg?branch=master)](http://inch-ci.org/github/ksky521/nodeppt)

## Why nodeppt?

 * Markdown based on GFM;
 * Mix code with html and markdown
 * Export your work with the html and pdf formats;
 * 18 different transition animations, and you can choose single page animation well;
 * Setting one page background image different than others;
 * Overview mode, multiscreen mode, remote control with socket, shake to page-flipping with ipad/iphone;
 * Canvas is also supported, with socket, we **sync your multiscreen in real time**, and you can type some notes;
 * Syntax highlighting is supported of course, and you may want to customize your [syntax highlighting style](https://highlightjs.org/), it's supported well;
 * Animation on a single page, one-step animation;
 * Themes：[colors](http://js8.in/nodeppt/)-[moon](http://js8.in/nodeppt/?theme=moon)-[blue](http://js8.in/nodeppt/?theme=blue)-[dark](http://js8.in/nodeppt/?theme=dark)-[green](http://js8.in/nodeppt/?theme=green)-[light](http://js8.in/nodeppt/?theme=light)
 * [Forward and backward callback function](#callback)

## 1.2.0 New Features
 * Real time sync canvas drawing across multiple devices
 * Watch
 * Add buttons to control page-flipping
 * Bugs fixed

## Demo

 * http://js8.in/nodeppt/
 * sync multiscreen in real time: http://js8.in/nodeppt/?_multiscreen=1 (make sure alert is allowed in your browser)
 * front-end experience of mobile baidu: http://js8.in/nodeppt/box-fe-road.htm


## Customize your Theme

 * Is the default theme not cool?  Just customize your theme! Take a look with [theme.moon](https://github.com/ksky521/nodeppt/blob/master/assets/scss/theme.moon.scss)
 * Write your customize theme's template path in setting md:

 ```markdown
 title: presentation title
 speaker: author name
 url: http://your.site
 transition: zoomin/cards/slide/...
 files: /path/to/your/theme.css
 ```

## Installation

 ```bash
 # get help
 nodeppt start -h
 # bind given port
 nodeppt start -p <port>
```

```bash
nodeppt start -p 8090 -d path/for/ppts
# bind host, default value: (0.0.0.0)
nodeppt start -p 8080 -d path/for/ppts -H 127.0.0.1
# socket (type 'Q' to show/hide QR Code, use your phone scan it, and you can control the slider)
# if your want to use socket, notice the follow:
		* 1, make sure that your phone and your pc/mac is allowed to access to each other
		* 2, the firewall
		* 3, ip
```


#### How do I start a socket?

##### Method 1: With Url Params

```bash
http://127.0.0.1:8080/md/demo.md?controller=socket
```

Type 'Q' in page to show the QR Code, scan it, and then you can control the slider on your phone. Swipe, touch, or shake to flip page.

##### Method 2: Use The 'start' Command:

```bash
nodeppt start -c socket
```

Type 'Q' in page to show the QR Code, scan it, and then you can control the slider on your phone. Swipe, touch, or shake to flip page.

#### How to Start postMessage:

```bash
http://127.0.0.1:8080/md/demo.md?_multiscreen=1
```

#### Export your .ppt

Share your awesome slider with others, why not?

#### Export to PDF format:
<a name="export-pdf"></a>
Install phantomjs

```bash
npm install -g phantomjs
# start nodeppt server
nodeppt start
# export file
nodeppt pdf http://127.0.0.1:8080/md/demo.md a.pdf
```

<a name="export-html"></a>
#### Export to HTML

```bash
# get generate help
nodeppt generate -h
# generate command
nodeppt generate filepath
# export all project file, include js, img, css folder
# export to publish folder default
nodeppt generate ./ppts/demo.md -a
# export to given folder
nodeppt generate ./ppts/demo.md -a -o output/path

export all ppt file and generate ppt list index:
```bash
nodeppt path -o output/path -a
```

#### markdown syntax
nodeppt supports **marked** syntax, but for greater ppt, we extend the next syntax:

#### settings
```markdown
title: presentation title
speaker: author name
url: http://your.site
transition: zoomin/cards/slide/...
files: path/to/js/or/css/files
```

**directory relationship**:

<a name="transition"></a>
support the followed animations:

 * kontext
 * vkontext
 * circle
 * earthquake
 * cards
 * glue
 * stick
 * move
 * newspaper
 * slide
 * slide2
 * slide3
 * horizontal3d
 * horizontal
 * vertical3d
 * zoomin
 * zoomout
 * pulse

if you want set single page animation, go to **[single page animation setting](#transition-page)**


```markdown
[slide]
# 栈和队列
### 余涵
[slide]
## 栈

----
* LIFO（last in first out） {:&.rollIn}
* 栈顶、栈底
* 入栈、出栈
* 生活中例子
    * 餐盘，最新放上去最先被拿走
    * 一摞书
    * 最新收到的邮件最先看到
    * …
[slide]
## 栈结构的实现

----
* push(element) 添加一个新元素到栈顶
* pop()   移除栈顶的元素，同时返回移除的元素
* peek()  返回栈顶的元素，不对栈做任何修改
* isEmpty()   如果栈内没有任何元素返回true，否则返回false
* clear() 移除栈内所有元素
* size()  返回栈里元素个数
* print() 打印栈内元素

[slide]
## 十进制转二进制
![十进制转二进制](/img/test.png)
[slide]
## 汉诺塔

----
* 有三根杆子A，B，C。A杆上有N个(N>1)穿孔圆盘，盘的尺寸由下到上依次变小。要求按下列规则将所有圆盘移至C杆：
    - 每次只能移动一个圆盘；
    - 大盘不能叠在小盘上面。

![汉诺塔](/img/hanoi.png)
[slide]
## 汉诺塔

----
* 将A柱子上的n-1个盘子暂时移到B柱子上 {:&.rollIn}
* A柱子只剩下最大的盘子，把它移到目标柱子C上
* 最后再将B柱子上的n-1个盘子移到目标柱子C上

[slide]
## 汉诺塔

----
* 传说印度某间寺院有三根柱子，上串64个金盘。寺院里的僧侣依照一个古老的预言，以上述规则移动这些盘子；预言说当这些盘子移动完毕，世界就会灭亡。这个传说叫做梵天寺之塔问题(Tower of Brahma puzzle)。 {:&.rollIn}
* 若传说属实，僧侣们需要2^64 − 1步才能完成这个任务；若他们每秒可完成一个盘子的移动，就需要5846亿年才能完成。整个宇宙现在也不过137亿年！

[slide]
## 队列

----
* FIFO（First In First Out） {:&.rollIn}
* 它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作
* 生活中例子
    * 电影院, 商场, 甚至是厕所排队
    * 优先排队的人, 优先处理. (买票, 结账, WC)
    * …

[slide]
## 队列的实现

----
* enqueue(element, priority) 根据优先级向队列添加一个新元素
* dequeue() 移除队列的第一项，并返回被移除的元素
* front() 返回队列的第一个元素，最先被添加，最先被移除
* isEmpty() 如果队列不包含任何元素返回true，否则返回false
* size()  返回队列包含的元素个数
* print() 打印队列元素

[slide]
## 优先队列

----
* 添加元素时, 将当前的优先级和队列中已经存在的元素优先级进行比较, 以获得自己正确的位置.

[slide]
## 击鼓传花

----
* 几个朋友一起玩一个游戏, 围成一圈, 开始数数, 数到某个数字的人自动淘汰.

* 最后剩下的这个人会获得胜利, 请问最后剩下的是原来在哪一个位置上的人?
