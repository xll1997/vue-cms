<template>
    <div>
        <ul class="goods-list">
            <li class="goods-item">
                <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt="">
                <h1>华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥2195</span>
                        <del class="old">￥2499</del>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </li>
            <li class="goods-item">
                <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt="">
                <h1>华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥2195</span>
                        <del class="old">￥2499</del>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
    min-height: 293px;
    .goods-item {
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        width: 49%;
        padding: 2px;
        img {
            width: 100%;
        }
        h1 {
            font-size: 14px;
            margin-top: 5px;
            margin-bottom: 5px;
            color: #000;
            text-align: left;
        }
        .info {
            background-color: #eee;
            text-align: left;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                font-size: 16px;
                color: #f00;
                font-weight: bold;
                .old {
                    font-size: 12px;
                    margin-left: 10px;
                    color: #8f8f94;
                }
            }
            .sell {
                font-size: 13px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
