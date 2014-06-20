

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">



<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>

</title>
    <script type="text/javascript">
        function insertFile(softName) {
            opener.document.getElementById("txt_SoftPackage").value = softName;
            window.close();
        }
    </script>
</head>
<body>
    <form name="form1" method="post" action="/zt/2011pingxuan/up_file.aspx" id="form1" enctype="multipart/form-data">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJNjk1MzI1ODYwD2QWAgIEDxYCHgdlbmN0eXBlBRNtdWx0aXBhcnQvZm9ybS1kYXRhZGRkmSec3o6kk7QhgVc5iucGzrbQOA==" />

<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWAgLipP9aArzBpuQIi7yGseMEhsUNh4IKLgJmd6lztwU=" />
    <div>
        <div>
            <h2>文件上传</h2>
        </div>
        <div>
            <input type="file" name="fu_UpFile" id="fu_UpFile" size="45" />
        </div>
        <div style="margin-top:10px; ">
            <input type="submit" name="btn_UpLoad" value="上传" id="btn_UpLoad" />
        </div>
        <div>
            <div>只能上传 .rar  .zip  .7z的压缩文件</div>
            <span id="lblError"></span>
        </div>
    </div>
    </form>
</body>
</html>
