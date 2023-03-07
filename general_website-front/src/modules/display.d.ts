import { DefaultObject } from './index'

interface DisplayFuncModel {

}

// 功能模型
interface DisplayFuncModel {
  title: string,
  funcInfoList: Array<DefaultObject<DisplayFucInfoModel>>
}
interface DisplayFucInfoModel {
  imgId: string,
  imgTitle: string,
  imgPath:string
}


// 介绍模型
interface DisplayIntroduceModel {
  title: string,
  introduceTitle: string,
  introduceInfoList: Array<DefaultObject<DisplayIntroduceInfoModel>>
}
interface DisplayIntroduceInfoModel {
  description: string,
}


// 其他模型
interface DisplayOtherModel {
  title: string,
  imgInfoList: Array<DefaultObject<DisplayOtherImgModel>>
}
interface DisplayOtherImgInfoModel {
  imgTitle: string,
  description: string,
  imgPath: string,
}

// 目标模型
interface DisplayTargetModel {
  title: string,
  targetInfoList: Array<DefaultObject<DisplayTargetInfoModel>>
}
interface DisplayTargetInfoModel {
  targetNum: number,
  targetDescription: string,
}