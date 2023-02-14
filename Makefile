dist:
	@mkdir -p dist
	@cp icon*.png manifest.json rearrange.js updated.html dist/
	@zip -r rearrange_tabs.zip dist/

clean:
	rm -fr ./dist/

.PHONY: dist clean
