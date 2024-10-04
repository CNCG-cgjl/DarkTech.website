// 定义 URL
const navigateToNextPage = "https://dz1d.space/?page_id=93";

function navigateToNextPage() {
    // 显示提示信息
    document.getElementById("navigation-alert").textContent = "即将跳转至下一页，请做好准备";
    document.getElementById("navigation-alert").style.display = "block";

    // 检查 URL 是否有效
    try {
        new URL(nextPageUrl);
        window.location.href = nextPageUrl;
    } catch (error) {
        console.error("URL 无效:", error);
        document.getElementById("navigation-alert").textContent = "即将跳转至下一页，请做好准备\n（注意：URL 无效，请检查 URL 设置）";
    }
}

// 假设页面中有一个用于显示提示信息的元素
document.getElementById("navigation-alert").style.display = "none";