import { showToast } from "./message"

export async function saveImageToPhotosAlbum(url: string) {
    if (!url) return showToast('图片错误')
    //#ifdef H5
    showToast('长按图片保存')
    //#endif
    //#ifndef H5
    try {
        const res: any = await uni.downloadFile({ url, timeout: 10000 })
        await uni.saveImageToPhotosAlbum({
            filePath: res.tempFilePath
        })
        showToast('保存成功', 'success')
    } catch (error: any) {
        showToast(error.errMsg || '保存失败', 'none')
    }
    //#endif
}
