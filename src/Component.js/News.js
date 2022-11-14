import React from "react";
import NewsItem from "./NewsItem";
import "bootstrap/dist/css/bootstrap.min.css";

function News() {
  const articles = [
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Lakers finalizing trade to send Talen HortonTucker, Stanley Johnson to Jazz for Patrick Beverley, per report  CBS Sports",
      description: "Beverley will improve the Lakers' perimeter defense",
      url: "https://www.cbssports.com/nba/news/lakersfinalizingtradetosendtalenhortontuckerstanleyjohnsontojazzforpatrickbeverleyperreport/",
      urlToImage:
        "http://res.cloudinary.com/dvklutj2x/image/upload/fl_progressive,q_auto,f_auto,dpr_auto/v1612422121/fkiu4phzmo9whjulht1s.gif",
      publishedAt: "20220825T03:35:23Z",
      content:
        "The Los Angeles Lakers are expected to finalize a trade that will send Talen HortonTucker and Stanley Johnson to the Utah Jazz in exchange for Patrick Beverley, according to Adrian Wojnarowski. No p… [+2551 chars]",
    },
    {
      source: {
        id: "associatedpress",
        name: "Associated Press",
      },
      author: "Acacia Coronado",
      title:
        "Uvalde school board fires police chief after mass shooting  The Associated Press  en Español",
      description:
        "UVALDE, Texas (AP) — The Uvalde school district fired police chief Pete Arredondo on Wednesday under mounting pressure in the grieving Texas town to punish officers over letting a gunman at Robb Elementary School remain in a fourthgrade classroom for more th…",
      url: "https://apnews.com/article/uvaldeschoolshootingpoliceshootingstexas6c5ba12b382b5cc42a6e5816dc418383",
      urlToImage:
        "https://images.newson6.com/kwtv/production/2022/July/20/uvalde-schools-look-to-fire-chief-arredondo-after-shooting.1658334280330.jpeg?w=1050&h=590.617&fit=crop",
      publishedAt: "20220825T03:00:00Z",
      content:
        "UVALDE, Texas (AP) The Uvalde school district fired police chief Pete Arredondo on Wednesday under mounting pressure in the grieving Texas town to punish officers over letting a gunman at Robb Elemen… [+5476 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Nicki Gostin",
      title:
        "Sylvester Stallone addresses reports that a dog caused marriage to end  Page Six",
      description:
        "“We did not end the relationship on such a trivial argument,” says Stallone shooting down reports his marriage broke up over his dog.",
      url: "https://pagesix.com/2022/08/24/sylvesterstalloneaddressesreportsthatadogcausedmarriagetoend/",
      urlToImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/1200px-Labrador_on_Quantock_%282175262184%29.jpg",
      publishedAt: "20220825T02:51:00Z",
      content:
        "That’s the doggone truth.\r\nSylvester Stallone is denying claims that his 25yearold marriage ended because of his dog.\r\nOn Wednesday, it was reported that Stallone’s wife, Jennifer Flavin, filed for… [+2090 chars]",
    },
    {
      source: {
        id: "thewashingtonpost",
        name: "The Washington Post",
      },
      author: "Gus GarciaRoberts",
      title:
        "Vanessa Bryant awarded $16 million over photos from Kobe Bryant crash site  The Washington Post",
      description:
        "Kobe Bryant's widow had filed suit against the L.A. County Sheriff's Department over the taking and distribution of photos from the crash site by deputies and firefighters.",
      url: "https://www.washingtonpost.com/sports/2022/08/24/vanessabryantlawsuitdamages/",
      urlToImage:
        "data:image/jpeg;base64,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",
      publishedAt: "20220825T02:49:00Z",
      content:
        "Comment on this story\r\nLOS ANGELES A federal jury awarded Vanessa Bryant, widow of Los Angeles Lakers legend Kobe Bryant, $16 million on Wednesday, finding that Los Angeles County sheriffs deputies a… [+3483 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Is Biden's student debt forgiveness fair?  BBC",
      description:
        "While tens of millions will benefit from loan relief, the plan has critics on both sides of the aisle.",
      url: "https://www.bbc.com/news/worlduscanada62669071",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/10467/production/_126436666_students.jpg",
      publishedAt: "20220825T02:48:07Z",
      content:
        "By Robin LevinsonKingBBC News\r\nUS President Joe Biden is cancelling billions of dollars of federal student loans. But what difference will it make?\r\nOn Wednesday, Mr Biden announced he will cancel u… [+7546 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Tierney Sneed, CNN",
      title:
        "Judge blocks enforcement of Idaho's abortion ban in medical emergencies day before it was set to take effect  CNN",
      description:
        "A US district court on Wednesday evening granted a Biden administration request, temporarily blocking Idaho's ban on abortion in situations where the ban conflicts with federal standards for emergency care.",
      url: "https://www.cnn.com/2022/08/24/politics/idahoabortionbandoj/index.html",
      urlToImage:
        "https://gdb.voanews.com/019e0000-0aff-0242-09ac-08da863d377f_cx0_cy18_cw85_w408_r1_s.jpg",
      publishedAt: "20220825T02:20:00Z",
      content:
        "(CNN)A US district court on Wednesday evening granted a Biden administration request, temporarily blocking Idaho's ban on abortion in situations where the ban conflicts with federal standards for eme… [+3391 chars]",
    },
    {
      source: {
        id: "theverge",
        name: "The Verge",
      },
      author: "Mitchell Clark",
      title: "Apple is changing a few key iPhone sounds  The Verge",
      description:
        "With its upcoming iOS 16 update, Apple has changed the sounds the iPhone makes when you’re trying to find it, and when you activate Siri in a car.",
      url: "https://www.theverge.com/tldr/2022/8/24/23320873/iphoneios16findmyalertsoundschangedsiricarplay",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/8xK3lelbY1u0n3dl8EFNJGCWk2s=/0x0:2040x1360/1400x1050/filters:focal(1012x663:1013x664)/cdn.vox-cdn.com/uploads/chorus_asset/file/24020048/226270_iPHONE_14_PHO_akrales_0797.jpg",
      publishedAt: "20220825T01:08:51Z",
      content:
        "Filed under:\r\nApples updating a few sounds, for good and bad\r\nSing me the new song of your people.\r\nPhoto by Vjeran Pavic / The Verge\r\nApples upcoming iOS 16 update brings with it a lot of new featur… [+1934 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "Turnout surge powered Democrats' N.Y. special election win — and their renewed hopes for November  POLITICO",
      description:
        "A string of overperformances in special elections are signaling a change in fortunes for Democrats ahead of the midterms.",
      url: "https://www.politico.com/news/2022/08/24/turnoutsurgepowereddemocratsnyspecialelectionwin00053651",
      urlToImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/ElectoralCollege2016.svg/1200px-ElectoralCollege2016.svg.png",
      publishedAt: "20220825T00:05:59Z",
      content:
        "There are 222 seats in the House that are better in terms of the Biden vote than New York 19, said Sean Patrick Maloney, the chairman of the Democratic Congressional Campaign Committee.That is the ca… [+5854 chars]",
    },
    {
      source: {
        id: "thewallstreetjournal",
        name: "The Wall Street Journal",
      },
      author: "Sebastian Herrera",
      title:
        "Amazon to Shut Down Amazon Care Telehealth Unit  The Wall Street Journal",
      description:
        "The tech giant said it would close the Amazon Care service by the end of the year as it retools its healthcare offerings following the purchase of primarycare company One Medical.",
      url: "https://www.wsj.com/articles/amazontoshutdownamazoncarehealthunit11661379538",
      urlToImage:
        "https://images.livemint.com/img/2022/08/25/1600x900/Amazon_1661429293080_1661429293224_1661429293224.JPG",
      publishedAt: "20220824T23:41:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "U.S. carries out airstrikes in Syria  CBS Evening News",
      description:
        "The U.S. military carried out airstrikes in eastern Syria, targeting areas used by Iranianbacked militias, a U.S. military spokesman said. #syria #airstrike...",
      url: "https://www.youtube.com/watch?v=PI9ULKc0NCc",
      urlToImage: "https://i.ytimg.com/vi/PI9ULKc0NCc/maxresdefault.jpg",
      publishedAt: "20220824T23:01:15Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Hoping for more clarity from Powell at Jackson Hole, says Jim Bianco  CNBC Television",
      description:
        "Jim Bianco, Bianco Research, on what to expect from the Fed this week. With CNBC's Courtney Reagan and the Fast Money traders, Dan Nathan, Tim Seymour, Karen...",
      url: "https://www.youtube.com/watch?v=eKdHQ2IOJns",
      urlToImage: "https://i.ytimg.com/vi/eKdHQ2IOJns/hqdefault.jpg",
      publishedAt: "20220824T22:33:12Z",
      content: null,
    },
    {
      source: {
        id: "thewashingtonpost",
        name: "The Washington Post",
      },
      author: "Josh Dawsey, Jacqueline Alemany",
      title:
        "Archives asked for records in 2021 after Trump lawyer agreed they should be returned, email says  The Washington Post",
      description: "",
      url: "https://www.washingtonpost.com/nationalsecurity/2022/08/24/trumprecordsarchives2021/",
      urlToImage:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGBgaHBweHRoaGh4cIR4kHxohGh4aGh4hIS4lHB4rIR4cJzgnKy8xNTU1HiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABIEAACAQIEAwUEBggEAwgDAAABAhEAAwQSITEFQVEGImFxgRORobEyQlLB0fAHFCNicpKy4RWC0vEkosIWMzRTk6Pi8kRjg//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQEAAgMAAgICAwEAAAAAAAABAhESITFBUQMiE2EyQqEE/9oADAMBAAIRAxEAPwBBXKGIKxBETNRu2hyidDp61OA7ZmYBpZpJImcxMErGvpU+DsqWAebaGZcKzRoSNI1kgD1pWGHo8kGANBpRJeLFAgn6D5t43BEHrvWYq+qZ0zm9bVRkEhFnMBJEZi0E6Dmd9Kq43hBQZs6wYOhzZc2oB1J8KOyq3c4vcYAGAAGG3UzUDY9iNT9mqKWTI76nwn8aL8LZbZFx8pYOoRcwPe1ObLzAgcuYpcbSEOGcCx14A28O5U5gGKhAfJngRR3Ddh8fIBe1b0U965tB/dB1oVf4/ibrkF3Op7oLTJ0gKKHB7jzAYkKJnlBO8+VPhPmls9W+wOJ1zYu2BLaAO0SNY1Gtc17RcOCYhgtxLwGX9oogMci7a8tvSjxwt+yyOXRGzysuDqFzScskafOlriGOzszDQEmB06eekUa1dHLtvgHvJnFrNDhQwQHbWAdRpqa1bh106+yI/lFTdn77M7gAHQbjofMdaYUS62yKP8v/AMqqbOllOG3ZnKFPiUPzBoxgMTikZTnUhSDlLwDBmCEUSJFFFwt7930ArX9VvTv8v9NGqQjheMu983sRawz9woEysRqwaSSpEiIqhc4zh8tpTgsP3G1PdlhlZdYXxn0qG5bdGHtGcg8ky/M7VcuW7JAgYgRqAHCxP+599I1rhF+2cRNu0tsF2JyGQf2SwJ6CCf8AMabjcE6mk3hoT2qBA4JJk3HzE90j303Lgc0+VVimtXup61q2MUafKrFjhYgnnNWmwCTt+YqtkEPiJ2HvqNGeYjTwowcEoYaVMLYHxo2NAb8LLamp7GEVRtrRRtqrhO9QATjKdxoEbGkrt3bysJ6V0TiYVULP9EQW0nTnoNfdSB+kEzkJme9vv4fdU04RyulOvY64Esu55TSO70a4ffdcM8bSQfeKN6a/jxmWUh0wnEWuWT4TrQbs6jNiHYa0T7PIFwhY8xS1gOO/q1xiozZiZ9TU/Ta2Y8tG3B8JOdz9dtz0qxg7IR2VILfWNAuFYvEXWuX1aEIOlEewTG4bjMZOanuTpljhllLlfIUuOqwvPmJJBp14fazYYMT9Q/KgXbnC5MTI+ss+7/ejXBHnAzzAIqMb3Xd+bCfw45QoYfDyJ6lv6jWUR4ZZm2p6yfexNZT4pt7LouTaZT9smNZ5a+Wle8KhLqEbZhuYB6ia1tGS0z9MjeOQqwqLpp8arTz2cYu3DcaHIXKBE6d09NjsNecU1cP4daXDo+IVEbNaDSSpZTcVHPd27pJ8KR8a8MQRplP3zRG9jgV75nQTqfAjnU3HfyJRLtAcKpVsN3wwJKHNK77sdOg58zQJ8YkCUZQGBOVh0IH1R1netb95dQGgSTA1E+FQtkjVuYn30ToC+G4pLm4HcOxkkrEmfBjz8KjfENmgkwfjpuaGIAY7w9PSpipOhZT01pZUQTd3KoFgjvmABzCgzHeJqji0MwRB6GfkdaiuIAEJk6n5VOQMmm1EAr2RsZncE/UG38Qpm9i4aA0CPvpa7HrlvuRztmf51pvJ7+vMffWuM6TlVcWG6z61IFykEHepYJrxk0qtED9oYlCZPdYn0IodaZXykKYgSDvJO48IijPE8P7SFG5RwPMxFAOEoxvgH6K7+6II6/hWOVsyVKM9n3AxSLkKgEb85/3rptpJPpXMsDa9nj0E913Vl9WAPxn8munI2WKrHylU6LofWvHGn58K0F2Jrz2mlUNtW1YVs6wa1L16zTT0W0bRUVxtqluCTUOSgKHE9bTj90/I1z79I6QbZncf9NdHx9v9m/8ACflSH23RXNvPtlB/5aVEc7RBrRjhjxYuId9fkKqX3tqYUVEGee7ueVTWv48pjlLfg1Yrjy28KqJqxER6UO4N2ea7ae81E+z3ZIOhe9ObkDy8qZuGYUWbL2gwOhijjdK545Zb/tX7G2A2FcedVewD5L91D+YMVF2S4otoOjaamqXDseLONL8mYg+tR9OuZ46/Jj9+D/6R8N3UuDkcp9ar8IWOHufP51J234mj2cnOQR76B2OMZMIbcbijX7Uv5pf/ADzG/F/4LcC4MGw9ti8SvTxrKC4PiDBFEHQVlabxc1/L2E4RVJeVmLjD3AQavpkH1J9avJ2YxBLuj2XzMW/7wjy+kByitP8AAcSJP6uzQTJUhvgCazuOTOWFvjmX2mggFG/6q14rshywpUR/FlWdvCN+tFOJ8OZjmdWtlUfRwVkwY1I11NboAbISVzQBr/Co9dQaLuaHpURta2C91jPMf1Cp8TgnVtp1+qJ+VYuHfI5ynLpJ8Qw089apLFiPGNx5x+NVi2tXCmVJ5kz6VTZPfUfIXcPiSFAJmGok0MgMDbyoLMAiI2ozbtnInTKKcMX7KKBdc/uR/wAw1psVZbTXSlTsmn7ZxI1Tx+0Kb3tARqPca1x8Rl63W15e+tLieIPlWCwT9ePStThwN3JPgBV7LQZxW66lMgBnNMkDpzNLuAN32zsFgljmzQIO/XoeVNuOwSOu7SDp98waGph02yidQY39+59azyx3dqlVsMbxxtlnC5AyBWUzJLoTPQ6bV1cxpXNUCqyECIdP6xXQr96NhTxmhVoKDWrppVFb7Go3xTRzqkrFxDuK2S/yO4qlbxjsIg1WcOG5waDELuJrxMWsamqT4RmM7VoOFE7v6UEkx/EUCMAeVJHarFJcFoEaBR/TTliuFKEOusUjdpsPkS0V5qPlU5KxLuIsJByjWtcBZbOhiYO1W0QkUV7PqBc1E6VE9VfDMuKOUBVI0HyoXdt3M2/3UfbGIiyBQy5xJHbatKzgFgsLIunZgzfAUKxCj2jmdRrFH8FdVTf/AIiRQTFgF3bqB8qz+Wm9RPib/t0ARdQBPx/CpseVXDqpEGheBulUbK2U5ACRuO+3u0qk7kaEk09HMhezjDlH7VF/d9nMeE5xNZSy6mayq2jR2ftEjNFtCF5g869t8funNkUL4ZiKaMNwPh4jLjnJ8LaRv426KP2Ms3VIW+uo0lACfHRhNTyVoi4DjeJIaED68yG18MwrdL90j/iLAbNrOUaeUUyXuyr4bVUW6pGuQkNpzynU+azVWxhUcSl1kEao2vz2py7KzRUxBOrGwAnLUr7oia2s4VHUhldVJB0AfbWNdh68qYbvC7hhfaI6GTlIj0mpWtJaABtupP2dRRobI3ErWViqkQPtLBjynSqdtCTuKJcdvTdYgZweZEHbYiqmdAPonbyrOw3tuwDIIU9B99X2w5yqJ2EdKjwVxQ6kGDI+fOiOOxZd2dvpMSTpFENnZ9Vt3GYn6h/qFMlm+H70gDlS3wQMLjHTVDv5j8KZFAYAHJ8fwrTG9JsTu4GvSo/1mdQPuqF8IuxgeU/jXiYNSdzA/dP40bLSQ3tY099By5LNr9Y/OjqcMQ8yPHY/E0HxOBCORmaDqNRz9POiiNXmB4Mp/wCYV0u8BtHOuf4bDgMCSY6k/nnXQjhCQvfO8/CnCRWrVVrtgTHOaJOpGxGg51CgiSRrP31QQ4VQBtW2JAgH41K4BUDbasFvrQSsuKEVVu3GLaCrIw6yffWjrptrQYTi8aSrAg7Uo8cudy3I0y6TT1icKpXUfVMefWk3tPbBs2fDT4mpyh40r3MTGgov2Pm5eIO0UC0k0xdhYOJKj7NTjOzy8OOJwChQQvWq6cEU6xTFdQRVZL3ditdM3PHw2S5eBP2/mRQiJz/wj5Ud4kf217+JhP8AFJ+740GspBPiin3gVnrte+lPh+Ha4hCmGZJE7d26T6SK9xXDLgUnLJUEmCNgJPPwrOEY8WoYrmm20CdJ9oBr4b7Vl7jDsSCYBkQNN+VPU0W7tNheyOJuItwC2A4zCX1g6ifSvKo/4riF7q37iqNAFYwB0FZT6H7LuFxRT6Qkc/H8abOEd9c1i4SwXvAt9HqVRpXfYQR5GqGB4U7EhrLsv8DfhWmK4BftOGtJd9LbyPWNRSsmi3bdOi4DiOJVB+1Rj9UvblTAGhKlchid9PnU2Ns2b4zYmwbbc71kl1H8cKHUeLplH2qTeDdonskJiUZARGZrZHlIMTTngOIp9NCrKo3E6COR6abeG9RZ9K3Z6EcT7NsqZ0ul7e6spzCPHePlQ/8AV7gYQ4IjxHyp7wwtMc6Tbdt2QwDPNljK09SpPjVTjeBKW7l0NkCqXZ7egIUEnMhOnmpPlRy+z1vxyjj/AAK5nz+zJzfWBnwkk7UuM41UGeoPKnPA8RxN9s/s1e0SRJaGEGCdTr7hMUTe+OvuVv7Ual+Rdz4IfD8CWYEAiOkj186t41xnbfc77nXc0zYm7P2j/l/FqV77gs4jUEnXzos0JVrgbzdysRBVvuphs2gJEgHpNLXAmnEKBuVbl+6T91NbYUtufgKeMFrzKQdRr1mg3aK85a2ik9QNpJJUeegoy2CyjMbpXqTAHwFSYK2t3Du6BHe2WBYHMcp1zDQEHQ6eGm9LLGrw97Dez9q4GJdmiD3dI3AmiGLwNxznRC0LA6ZtYBPLxqHAKHlywcbDJpEbqYO9VuP9oHw4S2hIGUn6AJ1YjNmYxPhHKiSzE7cbl/Ty7w1VSQ2INxS2csVCE5QSCs6LrpHMc66VbeUXxAPwrkGH4z7drSiWZ2ysWgFBmgt3dNTy5V2HDW+4mv1V+Qqsd67T+XW+npSZ9a9yaVtm+dedR0qmTIqJ+dSxMeNZk1M7UBWyACory6VYCb1rdHdpgL4hcgadNvdSJ2tuZLNvzbT/ADMB8j7qfOIMiLncgA6ROsnaOu0noJPKkDtniwbSqIKhiQQZnvvv8Pf41NOE5nMT60f/AEdXT+tHxH30rXr8iBTF+jpv+KH8P3iienlenYLjdaoXh0qzjmCIXJCgbkmAB4nlQ5uI2SoIu29yJzr4eNWgAuYRXu30dTDBT02Lag+YoEqyY/8A0of6RTPZuocS4Vg3dzSNRqFgTsdidOtLioM0yB+xUDx1O38tRP8AJd8KiHKi77MBPKHUnl1aqb3JNWxbYoYE5WuQADP1JPj19KHHQ66edBJBcPXmfnWVkCspKdUTt2wyi3mXTUMZnqasv25vuyhTlM6TMHTmaSLOFee9BPI1KyhhoSCvKjVTuH3D9pcVdOVmHTLCgNPPUT7iKmu32to7uLYBAGbdid9Dm2/tSlw3hzvlJtu6T/3iI5jzygz6a+dMGFwIs3ATbLrplJbMPPp6/KlcFzJviOEPeI9lfvjMM2VXyAGNpADSd4PmTQ1+Lm2l2zezyVKlXe44MjTe8V8fokeBo92n7THD2O4FW7cJUHmqxJYfAeZmuVX8QX1OaSdW38yaUxvye5PBe3xAWwVUtCk6KYB3g101e3Nlh3lsMDvLuPnaI+Ncde8e7IAI0LdfOrXC8QquGKh0nvLzA6r4jfxoxxm+xcq6JxftHYchLWHssSNWLnKJ2A+h+FDrXC8J9K/cS2TqQiZh6OHINSLwqw6o6JadCNWDOh8GAzjUcxE71vc4Hw0rJvWTcBAklhC8wJbMCPPlVXGFtrg8HwpLiMuMCvqAWVsmoIM97KvqaJ3v1VQcuMsueUbEnkYkJ5kkeVJ3argWHRQ+GuK6tCsgCuVJMC4M2uXkRJ5GqfAL0OBN1FOaTbAQrlQga66MdfAxtsVqzqFuVnG8Rcv3MiGIZ1CyJIWBO/Mg1FhVNi1etsdblq4pU88ts3BA5/RInqRVXi7o7nKIMk5ue8zOneJJM+NW+FYyw7EYkO5VTlYkqCcpU5shmSCRO3zqrjlLuDDLGyy+tuDcZTCko8sHSy6hdcrPaVjmnb6QHkKDYt1v3GZmdmIkkrlymdl70KgXQbkzryoeLAZmZ5WIhdYgGAO9PdAEbnbepLmIVRALbkk6GZO56cvyKuTfrO3Xghwa6Ev28iiM6DNufpDxruuAufs0JaZQHWNO5y0299fOmAuftbZ/fT+sV33CCcPb119nlAneVj16+lLK/SsZ12Ihpg8q3BkmqHC7DJZto5BZERSRsSqhSRoOnQVbXegk5bY+Vas2laoa1ZjQEbPAIqJ3MCpQvxrGTagILtvMsEbj7q5f25wSJYUrCsXbujTu5pBiusMulcu7fW39gpZp77AAaQA0KG/ejX/elTjnlMnYJ4xaeR+YpaNH+xX/AIpD50p6d8dkxdkOjI0wwgkGD6HlQX/s8mXLncQZ1M7weYo6zUNt2yHYAmCxOvU/7VaAG3hPZYl1DZgEA1AnYGTA8fhQSCWAH2I9zXF++mXFIBinHPIs+oge/KfdQGxHtT/A/wALrVn/ALLt/UC4E/7ZR+/cHrlUx8Ka/YKXAYSCYM+OlKfBo9sBzF+7Oh+yefXTanAt3lPiPnWuM6Y5etLPCMRbUJbxAyLooawrEDkCcwmNqyj01lGhsr4LguIL5HUZgs66CvL3AMQjFikqdDAB9R1FdAdXYtcHs822qnYct6mb2pgwm2oAP40aitlQcRx9m0iKECKoAi2ZEDzIk+VVuB8Sx9y8C6A220ZHhNJ+mhVe649xGh5ENSYi7PeRImDvV7NMQi6eMfdS0e3Nf0kuFvqqiFCAnNvJJPIkbEGk3DYlHMGVPWmX9JmVsUGj6SKSASdRK/JR8aSIysdutKw90zYhEW2hJJLsVjSFEHXrOg99CmR0aZOXkdhVfBe0e4qWwWZ2Cqg5kmIE7euldSw/YC6cPkdra3A7MMrMwysigqe6BmDLOkjU661JiX6PcamLw/s3RQ1nKrNlHeBnI07kwpBnpTNf7LYRzmNuTz1yz7vxoJ2J7MPg3dvbh0dQGT2ZBlSSpDl9IltI5+FObQFJ10E0ZYw5aVL/AGDwLk9y6hPMXGb3SSKRe2GBTAXRYsszh0V2Z4mJYZdABGnTrXTbvFHCM3s0yqJk3VBPgFCkyekVxztjdc3BdYyLmfKpmVGctl9A8Usesod7xtAsTjWkaAVoMUSCFIEeFR3rikkag1Ua0RDZhFaW6ZztefHM0BznUcm2/PlW1j9WY99Lmp+rcVQB62zPn4c5qNcAptZwxnNHIjaao3EI5zRylHGw4cNw/DSV7l5nEkg3QoBGq5QE2PQzHjvXROG2VxGGsMugEsWWVYxnUCQNu8a5P2LxHs8QWKhx7N5kTGm48SYX/Maduz2KdURBcuoLbmAjgKwPeiD9XWOWoNRvvpfHrdroRYda9UigGIw990YLiXDE5lZ0Rson6AGUSPE1AUvh3IuJBXuA2/otG7EESKNjjPs0j8a9jWheFuYpgmmGYDRyQ6tMCMkEiJPOpvaYkAzhrTMG0CXWHdOzGV0Oh08KOR8FthrXjb1C1+5mYNhXChZDLdU5j9kDSD51CeIRkzYfErm00CPl/ig6CjlC41ZIrmHblx7B1O/tJHl3Cfia6I3E7YDki+uTfNZJnxAUd4eVIH6Rblg2hkJzPlYBsyk7ScjUcoXGxzfLNH+yJjE2/Wl8GjHZQk4q0OrczHLqaUP4dtIqMiDNXUwrECAD5MDQ7i/CncoQIy5tCCZmOjDp0PpV8oniXuJNHEQOTWk15d1nj4TQC73bn84/9/8AvRLiaPbx+HUz3lMg5ulyIzaka1RxpHt3/if4kPUb/ZVnQBg2C4grP/5DH+ZGpsc0mfrCrfZyZUXrZkaiCrkx660exXaDDj65/lb8K0xuozym6dLdzQVlDsHxAOiuDowB+FZVoFrXEl3BgsZINELPFQaR7dxTGrNJ6RFFLVvkHIPKpWZbuIBmNCeda/rZjKduo++gys66bjrVhL56UAk/pHs/tkdCCGSCoOoKncjlIYR5NSnYtPeYIil3J0UCT/tznaup8Q4DYulmZVBcd5h3SY1BMfW1Oppa4dg2wN4N7RlsFhnIRc+XcgtEkQBIGm5iai3S5jtZ/R9wY4e/cuXUBZO4rTGViO8QCNTlYCZ0zECZOXquAuGI3nY/dQBsQtx0e2FKMCcy7RHdI686vcO4igkq6sQzLoZyxuD4yNfKKuY9Fb2OW1PQ+6pgrbEaeNVLF3OszqN/z8K2w96TBMcvfU6MI47wa2VdnVlV4DlGyknkTB3PWuX9qWQAKytCM4Qlu8QDEkx0Arr/ABVHuWXSO+ASomJZdQJ5AkR61y7A4W3jUz3kyvmjKGYEamQdjIjbrU2zGy05NyyOd3XmeQJnzqPw5V0PEdk8NMAPJ/fOlAONdlgmY22YkScpgzHIERRcpRMLFPhFjPYdAJJbT3CDRfhXYp2XPeYqvJVglh1zHugehPlUWBs+ytKuzbtrueZ/PSnfhWNF2wG+yFBI6xpp8PhWcy3tpljqQq47gVq0juiZWymCWYmCIOkx1oVY4XbZkNyAjI5YiAVyKxmdfs05cSxYKnvqJBCqBqT11kEDwpY4hee7atqWZrlwlWcgd1AxJJgAfRUDbUBq0njPL2aLAxd1PoO6CJGV2XSTGx8PhVjDcaxo1TEXzG37RiB6ExtRjE4dfaZFXSFC+STA/PWh72/Ysw0OYhl5CWMRPIaj40tfJ9b0sr2w4jaH/iHBJ5qh2jUypq3h/wBKHEV+lcR/4raj+gLS3xC7JAIAKzsZ3g7xVBqRugp+lzGgjNbw7QfsODtG+fTerifpgeCGwqGfs3CvKPsmkvhfDlK5n3bVQenWqWPwoRiOXKjRbdRs/pgtsZfCusA/RuB+Y6qooV2u7c4fGYY2kt3UeZBYLH0p3Dk7eFc1IirWAWSaDZRHs86LibTXCoQN3i2wEHeapXLRBr1dKey07SqcHZTbF3DBWhiFvBO9O8hx0Gg++rY4fhmZHS6ZACjJfYiCSNg2p1O4rgb68q0OnIe6pVyrqHG7QtYyx3rrzcibzZiO8R3Dvk6DxPShvaBirXmXfM4H/pg/fSGl0iIJB5QSPdVrDWmuXFRnYZjqzEtGnnrtFLeuxZbV3g2CFwlWYIA9uWMwBLAmJ1MGPXxp1XsxhYLJeRyBzGY+k/dSPgkRGuZyzKvdKgDvw2g8BKzUa49hd9oO6J1UE7fefGtJki4md7agx3f5RWVFnB1mva03GfEQPH7cyGT/AJv9daf9pbY0zJ/M/wDroBa4djCe6lr0Nv7jVgcHx/IKvqBWfKtOIwvaxB9ZP5n/ANdbjtmvVPe/+ugv+DY7ndtr/wD0SvP8JxvPEJ6Mx+S0cqNQwYbtSLrqmZRJ0IDGDB17xNS8SGZHJIbukZoI5bTFAsJwfF51Pt8wDAkAXDMGeSU18Zw37Ir9rYeAmJ84B99Kqin+j/HOT7EzkKlpG6RuR4EkCOpHU0ffD/q9lgh0RVCyZZtYg/vMRM8yfOkLhVu6rrkYox0DEkab69V0mDppT6zi7aYQHuIuYohIzMBmCieTRz29K0/HUZwwcExYKB37oYbdfL886N4cW2IjzHjSfwi4T+xuXC19FzkZQq6wSFgbDMNN4InrRjCXgkGYAM68uoNO6vhQwFEmdJ/PjSp20w6IiOiKpD94qoBMgkSRvqPjRxuO4cfW/p/GhvaLE27+GfJJIWf5SD+NRlLpWN7KGOxK2nlyYJgEK7/R5HKDHrVTEsDlMzoDJ9/31bv3gVUkxKqddjKjnyoNjH1UTPPTXn156Vk0oSxkH3Ve7PXs1lVJIQnK2Uie73lJB3WXM9YFT3MRYGHzLk9rpK6c2105wKDcAxARmEQGY6DrOnp/bpUY9Vd7hgvYSXJZyRyzLEx0E/dHhQr2ShbTn6obTkd+XM60dwNwhSAWE795mGu+7QPGql/CZEUk5ltgZzGWJgKIBMkkRpqa2x8rDKXc0W+KXSl5SNT3NOs7iouNYN5LyGTOsAcgYI39RXruXxOumXWOmm3oTU+PuFbbgZ3LuCOeXfQeGm1TMu9KuPWy3j1Idv8AL/SKq5STHWrly6WLFt9AdI2kVmGUZ1nqPhrT2WhTD2XckW0LZBsOi/fAOm+/So+IWyygjlTZwLB/sEcCCxZp/hMA/Cl3izhXdYgHUDpPegeGselUXQEmFJ3q5gcOqkk1RfEHlXlkMTM1Kha5fQmNK2KKdqGpZ51utwzSC3a4c7nuKW1jTrEwB5V5isEyEK6MpP2lK/PetcHiD8T8qI2WLM6uzDIjOobXvDQCDtMmgAWQZtxvV22I706zMii3CMBbe0XdAWzMJJPh0gfGvcXh0RZAjWN5H59aNCULcDQxq0sT1kmtFsgmo8biQGgdB8przDX41POgCltIArKh/WhWUw6JnQ7lz/EZHuBFa+zt/YHuI/6jVdVrdQdaok4VeSj3J/orfPGxYeTAfBQKrajnW6ueo99AT5p3E+bMfvFRcVuEKCFzSRAXU6co8OprA560F7ScRe2ECaltJgem+53MeHvQjfgq/wDEOcoHsxswzd5xvr0BiilnFC1iXZjreRVzCBlKHuwNtRmHovWhXZy6XRi+rgjMw1kncHyEec1V7UX29pbRFAKrnLGdO9lWCDoZU6+FGPQunRsDh0Nw3xPtCoU6906AC5G0wBJ8BSp2k7WhbrpaywpgltZYfSjwnTzB60E4N2sdEKnO7sGCEAsQeYIHKNR0IPLZTxCuvedHUNJBZWWRzIJGo8a0yuvEY9nSxx92UyB4QD+NFMBxF/ZF3Ai5KIoBlp0ZtSdB84pAwHEcuhmCJgDXz12pzxeKzYm2miKjIqrOiiQd+usk1llllprjJaupYzKpdgoVVEHwA57Gg+MKh2adOQg0f9p3AJ5trJM6kzJJJ33oJxDDqVd2B+jIMxJ5SOWtSqle2/5mtuHt3j/EfnW7osLBQQNdeda4DDNmnumWMAHUweQ9KykXswcPd3ZydBusDTSQSeYWVbbXSedW8XcQWZEmDEkRmjWQPNiB4H0qst4Z3JLopACgeG0gaiPGeVQ4rFl7ce0Z8pIlu9A00+IM+Nays7NF7DOc7tpMx8f7Vde6zAAQNZnX8agwOFYs4VXcaSUUtrrM9KIDAkbgr4MyKfczTU2Xe1Y2a1S7j8ELKA5ixY66QB9LTnrpQ/Dv3h+eVH+0gVbaKIJzEzIJAgCNN+tLloww8/7VpPGeXvTs3Z7Dg4W1l29npO+538a592lTLdjqD8zXS+wpD4GyegdP5XIrnvbhMmJC+E+8n8K0vjKelJj+fWp7FyJqsxrewknyqGiU3CdK3tIedeCBWPe6UBYsMNh9r7qI8W4l7S7njKSuUiZ2WN6D28yAkj6w+X9xW7YlSQfH5gj8KUFM/ZdpsFjp32HIch5fOtu0CTbUj7Y6nkfEj41T7LY+2lpkdsrZyQNdoA3kcwedF8VkdGUMGkbggxzBkqef71VPE30jYtO+3+X+kUR4VhM7qpE+G8+FUbr97xgf0iiXD8Xcsn2yGMhQH12HWDBmpV8CGLv2rbsjWSzKYJFkETzAOkxt6VlPdnidxlDdRy29K9rTiz5qIH5msNakVgT/AH3qGjYtygHwqxbwt0xFlyPBDHvjaqygqZBgjYjQjlvy/vWz3X/8x/efxoC6vDr52tt6lR8zQDtVwy6yroqMCcsuGOojkdPPwq3cUt9J2Pmah9gu330aGwHs/gLuHJcupBEFAx1mIIHMjr51a4pirwYXLQ7+RkYHmG5gnTQz76KDDr+ZrX9VHiPWnOipf7MPewzlznRspUZWAJkgtJB27o0ozxLibX0ZHtI+ZSMxtpmWdMyvlkEaHfkKsrhhz19K2Wx4AeVAhN4dwhluqXGdARmUGCQNcswQPHSni1csO4bI6NIOtm2501gPo0+IFR5VGprx8dbtKzsQAFIE9Tpy1OhOgpXw56s4LNeU5VylWIyk6Ge9IMb67VmOwwOS05yggs0AEaEQDmI6nr9GlnBcUVkcgKoLiMqtmOUTMBwSO94jTao7/E2LLcBe4QxlCjKFABCkkqZOpgSY1kyaiTtVvRh/wqyP/uB8Ah+dQvwfDmTltgn603c3vWBVLC8ZzsVyFCBuY8BGmx8DVpsWfyK0Shfs7aaZuTPLPd+RFCO0ODFtVtqSVjTVgiyxOikRJbUkjkANtDD4pqqOwJlhJ66UtFuo+zYtGLbsVeCxMZs0GNpBAiI05GmIYXDj6xPjOX4ZDS6hRNVQA9dPwqzhuLMmgRD4kAn3xNPX9jdVe2LW/ZhEC5pBBzEmBoRrE78hSjh8HcY91SY8h86cbnE3YyVHvb8aj/xFx9Ue9vvNLU+xumn9FuNlLuHP00fOB4HusB1gjX+KlD9IGLV8c+QyqdyRzKjve5iw9KHvinS8XVyjNJzKSpEjWCNpoRfcEsRsBHvp29FMe1Ymt7TxUU16m9SpKxr1BWuU1cwuGJOopgQ/w4PbkMxaNAdv9qjw/A/tsfJNPiR91XEx7qMucgDlpUF3jDgxmJ9aQetwe0P/ADPVl/01snDkmQz/AMw/CoBxRz9Y+/8AvXn69HPWjZq+IhWI6QPcK3tP+zcQc3dPUBdQxPQ5imvnWNiucCvcDcuM7Jbgm6pUroc3dOmvPmPGnCroHZ/Ff8PaC5oCx6gkH4zWUJXiWUBSwYqAubaYETHLasrTky0PQPGsMeNZWVm1bQNqxB5e6srKAwmOnurWBNe1lMNQTsK8LcqysoDU15pzrKygNHWq91AfpVlZQFW7gLbasoMeFaf4cg2VfcPwrKyhLdbAXQBR5CvC1ZWUBhrQoKysoCJrXhUT2/CsrKAifD1ocKOtZWUKUsZw8sNCJ5cqE3MBc2A+Ir2spBCcA/Qe+pLWDYHUfGvKypNcAC7iasBiBPKsrKAgdtzVcxNe1lMPHugbCo3QHWK9rKA9RIqTBuUcOuhVgw+f3VlZRAeP8VwVzvuYZtSDbJ18wNaysrKtGn//2Q==",
      publishedAt: "20220824T22:31:29Z",
      content:
        "About two dozen boxes of presidential records stored in thenpresident Donald Trumps White House residence were not returned to the National Archives and Records Administration in the final days of h… [+5347 chars]",
    },
    {
      source: {
        id: null,
        name: "STLtoday.com",
      },
      author: "Kurt Erickson",
      title:
        "As California moves ahead on electric vehicles, Missouri, other states try to pull plug  St. Louis PostDispatch",
      description:
        "California regulators were set to issue a rule Thursday requiring that 100 percent of all new cars sold in the state by 2035 be electric",
      url: "https://www.stltoday.com/news/local/govtandpolitics/ascaliforniamovesaheadonelectricvehiclesmissouriotherstatestrytopullplug/article_6d990642156f57ed8b513563189c4e7b.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/e/92/e92bd034-c240-5aa7-9012-ec63af9b6cc4/63077457460eb.image.jpg?resize=1200%2C800",
      publishedAt: "20220824T22:29:00Z",
      content:
        "JEFFERSON CITY California is moving closer to banning the sale of new gaspowered cars by 2035, but Missouri and 16 other states are trying to block the maneuver.\r\nMissouri Attorney General Eric Schm… [+3550 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: null,
      title:
        "Stocks Up as Traders Mull China Move, Await Powell: Markets Wrap  Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=68a53266243211ed91d2734743646461&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wOC0yNC9maXJtLWFzaWEtb3Blbi1haGVhZC1hbWlkLWNoaW5hLXZvdy1mZWQtY291bnRkb3duLW1hcmtldHMtd3JhcA==",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iULNhAsZtzyg/v2/pidjEfPlU1QWZop3vfGKsrX.ke8XuWirGYh1PKgEw44kE/1003x-1.png",
      publishedAt: "20220824T22:27:40Z",
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Elementary school student tests positive for monkeypox in Georgia  11Alive",
      description:
        "Newton County Schools said in a statement posted to their website that the student who tested positive attends Mansfield Elementary School. DPH has not confi...",
      url: "https://www.youtube.com/watch?v=XCIswniNf0k",
      urlToImage:
        "https://media.11alive.com/assets/WXIA/images/3296a7d4-8a65-4700-b79e-a8078aa88bda/3296a7d4-8a65-4700-b79e-a8078aa88bda_1920x1080.jpg",
      publishedAt: "20220824T22:12:48Z",
      content: null,
    },
    {
      source: {
        id: "abcnews",
        name: "ABC News",
      },
      author: "Alexander Mallin",
      title:
        "DOJ releases memo behind Barr's decision not to prosecute Trump for obstruction  ABC News",
      description:
        "Officials previously told the court that the document should be kept secret.",
      url: "https://abcnews.go.com/Politics/dojreleasesmemoagbarrsdecisionprosecutetrump/story?id=88808145",
      urlToImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInGaCvBFtWDYeWZkgzRwUPPJ2q_fauoLOaHUgPb9-CSKUk-NB9WgAxoiairZpGBZfZrk&usqp=CAU",
      publishedAt: "20220824T22:00:04Z",
      content:
        "Under order from the D.C. Circuit Court of Appeals, the Department of Justice on Wednesday released a 2019 memo used by former Attorney General William Barr to justify his decision not to prosecute t… [+6354 chars]",
    },
    {
      source: {
        id: "googlenews",
        name: "Google News",
      },
      author: null,
      title:
        "Five of the most breathtaking images from NASA’s Webb telescope  The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiZ2h0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvMzYxNDI1OC1maXZlLW9mLXRoZS1tb3N0LWJyZWF0aHRha2luZy10YWtlYXdheXMtZnJvbS1uYXNhcy13ZWJiLXRlbGVzY29wZS_SAQA?oc=5",
      urlToImage:
        "data:image/jpeg;base64,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",
      publishedAt: "20220824T21:48:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Danny Hakim, Richard Fausset",
      title:
        "Lindsey Graham Resists Testifying in Trump Investigation in Georgia  The New York Times",
      description:
        "The senator from South Carolina is fighting efforts to force him to testify before a grand jury investigating election interference by Donald J. Trump and his allies.",
      url: "https://www.nytimes.com/2022/08/24/us/lindseygrahamtrumpgeorgia.html",
      urlToImage:
        "data:image/jpeg;base64,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",
      publishedAt: "20220824T21:43:51Z",
      content:
        "Mr. Raffenspergers account of his conversation with Mr. Graham and his inference that Mr. Graham wanted to explore tossing mailin votes from counties with high rates of questionable signatures has b… [+1829 chars]",
    },
    {
      source: {
        id: null,
        name: "Eonline.com",
      },
      author: "Kelly Gilmore",
      title:
        "Nick Cannon Expecting Baby No. 9, His 3rd With Brittany Bell  E! NEWS",
      description:
        'Nick Cannon shared he and Brittany Bell have a baby on the way, marking their third child together and Nick’s ninth child. Learn about the pregnancy that happened when "time stopped."',
      url: "https://www.eonline.com/news/1343396/nickcannonexpectingbabyno9his3rdwithbrittanybell",
      urlToImage:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA113XoA.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg&x=539&y=191",
      publishedAt: "20220824T21:42:00Z",
      content:
        "Nick Cannon and Brittany Bell's family tree is growing.\r\nThe 41yearold announced that he is expecting his third child with the model, sharing a video montage from their recent maternity shoot to In… [+925 chars]",
    },
    {
      source: {
        id: "associatedpress",
        name: "Associated Press",
      },
      author: "Matthew Perrone",
      title:
        "Study: Pfizer COVID pill showed no benefit in younger adults  The Associated Press  en Español",
      description:
        "WASHINGTON (AP) — Pfizer's COVID19 pill appears to provide little or no benefit for younger adults, while still reducing the risk of hospitalization and death for highrisk seniors, according to a large study published Wednesday.",
      url: "https://apnews.com/article/covidsciencehealthseniorsd8f6af66517054aae7fb27d1ecc6df66",
      urlToImage:
        "https://wpcdn.us-east-1.vip.tn-cloud.net/www.wvua23.com/content/uploads/2022/08/v/i/mgn-1280x960-11116c00-sbcmu-1024x768.jpg",
      publishedAt: "20220824T21:13:41Z",
      content:
        "WASHINGTON (AP) Pfizers COVID19 pill appears to provide little or no benefit for younger adults, while still reducing the risk of hospitalization and death for highrisk seniors, according to a larg… [+4392 chars]",
    },
  ];
  return (
    <div className="continer my-3">
      <h2>NewsPigeon</h2>
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4">
              <NewsItem
                title={element.title ? element.title : "Title"}
                description={
                  element.description
                    ? element.description
                    : "Here Description is null"
                }
                imageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "data:image/jpeg;base64,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"
                }
                url={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
