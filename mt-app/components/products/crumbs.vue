<template>
    <div class="m-crumbs">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">xxxxx</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">xxxxx</a></el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    props: {
        keyword: {
            type: String,
            default: ''
        }
    }
}
</script>

