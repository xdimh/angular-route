<html>
	<head>
		<title>Bob’s Auto Parts - Order Results</title>
	</head>
	<body>
		<?php
			$str = '"test\testtgestse\/restetst/etset/\n"';
			echo $str;
			$strAfterFormat = addslashes($str);
			echo $strAfterFormat;
			echo stripslashes($strAfterFormat);
		?>
	</body>
</html>