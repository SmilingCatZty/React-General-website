import React from 'react'
import './style.scss'

const Display = () => {
  const pageList = [
    { imgIndex: 1, imgTitle: '图片1', imgSrc: 'http://rqthp68he.hn-bkt.clouddn.com/.jiguang/%E4%BA%91%E9%9F%B5.webp?e=1677721086&token=nGEoj2K4NH4RnbJ-ZvSFifPGItrGXpILet73zdO2:W5KSxwlcs59C_TuHk-8sJ7ibfic=' },
    { imgIndex: 2, imgTitle: '图片2', imgSrc: 'http://rqthp68he.hn-bkt.clouddn.com/.jiguang/%E7%BA%A2%E9%9B%AA.webp?e=1677721102&token=nGEoj2K4NH4RnbJ-ZvSFifPGItrGXpILet73zdO2:QjLdLwAbX1q2ipZO5Ux_lp0mSSI=' },
    { imgIndex: 3, imgTitle: '图片3', imgSrc: 'http://rqthp68he.hn-bkt.clouddn.com/.jiguang/%E7%BB%BF%E6%9E%81.webp?e=1677721117&token=nGEoj2K4NH4RnbJ-ZvSFifPGItrGXpILet73zdO2:71l0ciaCD9-afnc6WJuG42qEqxA=' },
    { imgIndex: 4, imgTitle: '图片4', imgSrc: 'http://rqthp68he.hn-bkt.clouddn.com/.jiguang/%E7%BB%BF%E6%9E%81.webp?e=1677721117&token=nGEoj2K4NH4RnbJ-ZvSFifPGItrGXpILet73zdO2:71l0ciaCD9-afnc6WJuG42qEqxA=' },

  ]
  return (
    <div>
      <div>
        {
          pageList.map((item, index) => {
            return (
              <div className='img_background' key={item.imgIndex + index} style={{ backgroundImage: `url(${item.imgSrc})` }} >
                <span className='img_title'>{item.imgIndex}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Display