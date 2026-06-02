
content-slice:
	git ls-files -z | grep -zvE 'lock|css|svg|jpg' | xargs -0 files-to-prompt

