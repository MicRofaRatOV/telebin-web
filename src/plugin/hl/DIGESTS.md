## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
  integrity="sha384-9mu2JKpUImscOMmwjm1y6MA2YsW3amSoFNYwKeUHxaXYKQ1naywWmamEGMdviEen"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"
  integrity="sha384-WmGkHEmwSI19EhTfO1nrSk3RziUQKRWg3vO0Ur3VYZjWvJRdRnX4/scQg+S2w1fI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-o2RvzuEpU78s+xoEWs/++kMfb71T2QoVpd5kcyephebSrCF7IBl82kpINu7hXFCB /es/languages/apache.js
sha384-T5Wi3CdvOgNTDa/TQF3guYZxiCaiLFKzgYxX57ZCt1rVax+G6GP9EOlNdg8spAUs /es/languages/apache.min.js
sha384-Qbgrf1REEH3h83e6HRrq1xAI7m7OMypPrpW6TLy6HiiPHu8CtlsqRpXdt6FOxdbb /es/languages/arduino.js
sha384-l1VXXq344qaos4PmR6Yteczej4EdX2RQZQZWWZAoLb2BcnWzJVpmAWd5AHj1UFeF /es/languages/arduino.min.js
sha384-uBlc/xEFeDxZmBU7K/YWwi3ryXQrLQCAY2K1Dl3OD2DaAQBZZTt6Ew3aeDP20ix0 /es/languages/bash.js
sha384-4qer4rJCVxZjkwD4YaJfOnT2NOOt0qdjKYJM2076C+djiJ4lgrP1LVsB/MCpJSET /es/languages/bash.min.js
sha384-0OZaeLK1yb5eP3nW4y0JP1fVharSrsuv/1mkI/6/8aRFm9laYIWIMXjCOqu+vRW5 /es/languages/c.js
sha384-G7WtwjMBNGrPly3ZsbPhfnT0v88hG3Ea9fQhrSWfzj7cNAsXsU7EKMQLyLGj7vTH /es/languages/c.min.js
sha384-Wjwd1YEG/PYlkLHTWIx+RlPK6XboMN3bEpveERJ8D8Z4RaNE02Ho19ZFrSRPGi0j /es/languages/cpp.js
sha384-Q4zTNH8WsDVdSZbiZtzWS1HmAUcvMSdTmth9Uqgfjmx7Qzw6B8E3lC9ieUbE/9u4 /es/languages/cpp.min.js
sha384-Ia5nC6F+dWrLhnUoEIdtBywPSh5QJfX++8Ohr9xEdRWtKrngTEzM+w9MAs3OkW0M /es/languages/crmsh.js
sha384-FWGvxRI9DV+fT+c7GmrgMrdY0JGqiYLXDhLispUSnhqeHMfnVQXae2ICGhKrsyVz /es/languages/crmsh.min.js
sha384-Sp8E1Lb9fNhbvqBiogM60TCgpAIwYBi8WbHhIHcXO0bR5Z+9LeYwpDa1gkjzU99W /es/languages/csharp.js
sha384-huUb4Ol37G1WrtGV7bn1UArXcJSjD4tQswMGzgpNZYAPxR74MHTqW79z1dXWMvhk /es/languages/csharp.min.js
sha384-DA5ii4oN8R2fsamNkHOanSjuN4v7j5RIuheQqnxMQ4cFnfekeuhwu4IdNXiCf+UU /es/languages/css.js
sha384-OBugjfIr093hFCxTRdVfKH8Oe3yiBrS58bhyYYTUQJVobk6SUEjD7pnV8BPwsr8a /es/languages/css.min.js
sha384-nJZn4t0S58K5MJ/2BOmgkTC8TtBWB76ykEKIIzb8sUxT3h7ouZH5Ucqnr9MJ6Bry /es/languages/diff.js
sha384-OIJrZgyhN1E6e29B9M3gFPtkR5JgXpls8h5D2bNzBxQ8Ncwxzfjedu3/0jZEe7S9 /es/languages/diff.min.js
sha384-hYnh6bxVnenrhg3HDafFjUPaO4yMWcNa6jjBCbcRJAzOW9RidrTLcmNgEyk1EkqC /es/languages/django.js
sha384-fYhQZafPWO54UUJ6/TWCLZVfptppoJrgZw8syHnvkUeAf7+lAiBkU3x8UQ7rTmvB /es/languages/django.min.js
sha384-MIy8GI9hoOfmj9i8J9ET6pQfhZRSy2avHKawR4XrLC/TA0KTWF2UvSCfRGxtC9uk /es/languages/dns.js
sha384-BZdQkDZ1ac9zSg4XmtL2hLKld98ttTuqoM6CWOjKIrT16NkmNSlAY/1rK48DQjqy /es/languages/dns.min.js
sha384-/wYGIAWwdVeBvXFBq3HUPpdw6KUhW3wMMXruGXWjhlYT/IruTWojBeoPUbpGXaf5 /es/languages/dockerfile.js
sha384-DQdaFTXRCa9EQdAkBCHnMAhAomUgizSpJPmuCzoaDJMAshvgxlJF5d7J/ysvc6f/ /es/languages/dockerfile.min.js
sha384-0mcL0/j1MJ2+FgtU2TYJLu6pAVGmFb8E6OC62z0Ek+YHY+2eKQTP0j95j9Hwjdao /es/languages/dsconfig.js
sha384-oxNLUU6CptOQIukddlIGRE7mhYf+kD1gx1EeiE70rg5netrD1JjSt5BNvRJN3nnL /es/languages/dsconfig.min.js
sha384-TXDDfDMwXF7BNygA/q9QXXEhx93hAWyjoXCe991A0qRCBIkcv+ekdAn/xhvTD4R7 /es/languages/dts.js
sha384-UuvUHqhG03LaKnRfgywIMsS+lcwqusyfSh9FqB3eN4dm5YDwzRNVSDiWmWRMcz3m /es/languages/dts.min.js
sha384-Eu4oFaj83/CnftNCrrbzx9NGj35Fof3bzIXXTWVGx3Cm6d47o+82IjjlgfuBjkin /es/languages/fortran.js
sha384-tfyHooH7hV0/4S0EFsbgk/H9JZRSCEOuZSUOLQ6udPcWeHT17xuRlhnDlAPd1VnT /es/languages/fortran.min.js
sha384-XcoPs3a4/IR69b/Dm+Q+u2pZ1mkg4OLQY3nregS20Zi93M17jhVxokvDNVBKwocg /es/languages/go.js
sha384-27jMAcMfx5pzlW2ntRUz1R22f43tLLOnYyDHss8iJBUi23iVzYrxbwQKY+LPU35B /es/languages/go.min.js
sha384-xG7D+neOE4ESa3no3TB3dmUhFAzqhWs44rleL/wq+h4+fnINKJvI2e/73Hcx67ig /es/languages/graphql.js
sha384-sYfgkTuyw8lkHmGdVV7Mw1/C2jkRl3ZKZrSceJsMaqZAG2RNed+pSOfjwMMEIBO7 /es/languages/graphql.min.js
sha384-7m427rj9OYl8KKObOk+aD0QhXmqXy6hU/sHGS6OUwW9hRiiHvr+tLTbLiSJYbIyD /es/languages/http.js
sha384-GdKwMgTrO0R3SPXhm+DuaN3Qr7WkqYmmTClINAGPuV/BUPE9WUI/WnTEntp522Sl /es/languages/http.min.js
sha384-7hMYwsnoFLW0Wnjv4vRnZxuedW1tCz7/pydl1b9w3fg7B+rldToCjqzXwCRHUE7C /es/languages/ini.js
sha384-LDu6uT3diI3jBUJtdoGFa787cYlVrR+aqFfmW+kW+TImOkpVe+P5LBdDzydIHo9Z /es/languages/ini.min.js
sha384-WFJdA9Hz+G9NQx5vPba/tcGyIibm57UkKVY32wNB/94iT2FmPma5W7gY8p2l6qps /es/languages/java.js
sha384-coaxfgI2lKuDqSxfMlfyPq5WM0THaLGyATZHzaFMrWdIbPcLdduuItTe6AmT/m33 /es/languages/java.min.js
sha384-WCznKe2n87QvV/L1MlXN+S8R6NPUQGU34+AqogMuWGZJswSD6rt3Mgih+xuKlDgm /es/languages/javascript.js
sha384-eGsBtetyKPDKaLiTnxTzhSzTFM6A/yjHBQIj4rAMVaLPKW5tJb8U6XLr/AikCPd+ /es/languages/javascript.min.js
sha384-2+pPAn1jFSyw4e3p0BW059mD3OL0XmhYyp0f1MXYZkTsatnxTtKwyc0cWAFG2otO /es/languages/jboss-cli.js
sha384-QxgUyxVKlIKoUKhpv5x52u4Y49438L6rIge8mH2UqBI8S7aCKL7kR+1ulkny45ak /es/languages/jboss-cli.min.js
sha384-12GbYFzdyZCSmfBTmO2CR/qE89K5uE1PEuJ3QUwXH0Q9u+uoLNigjH9dG7LAxxiI /es/languages/json.js
sha384-+DT7AtubDhVDciRc6CgjJJRsCt0L8NC3Dh8n9Tj2tZWU8rWxDIj1ViubmUDn8OCY /es/languages/json.min.js
sha384-tsX5LI0gdW2Xk9ZMsj7B2vRchm3jC0zoc1r99Z1377aXFJJXimRtRYQprUJpSuu0 /es/languages/kotlin.js
sha384-mfmdbPhLobPr5OJzSXlWHDQDymRYyzedurWjJBvKVhlQGE+Jz/pN3D9lPEBIkDK2 /es/languages/kotlin.min.js
sha384-UO0mFYPt9ryvStqH+HMYBbv0OMe69vo7jHagEW7RSgUwmWsO+BQsQ9il4JvEyb9U /es/languages/ldif.js
sha384-epMw7vS/pc3vOOz4l9Bc4ivmcMrwtBmh3ZRGLa/auLNCxt6IJAJd2HtrsYwa6q2Z /es/languages/ldif.min.js
sha384-iBzB3Gn/ezqfaxd3xkqjVlWlUdqCAcOUBIjD5IQGs9p7tbFNU8ymlgKpDsGRGaDQ /es/languages/less.js
sha384-04z6U6c1rUG3NEMdXE8dOimK4VJx8yGR1D5qKHgS7319t9s27xfmtQLQKC6jDUuY /es/languages/less.min.js
sha384-OkDbf1Slbqz4CwuUJVZyhq9SKn5vYk5ADIxIBS3iV5D0ZY7T3g3BOGZgd9u0kyZH /es/languages/lua.js
sha384-wvrGnUzHwJzO9dWQFF2DxrFjkSPw5gmc0iOQYmJUzeZ4tqa+15VEFRCH4GI2DNF3 /es/languages/lua.min.js
sha384-bWwkdmOCj83zZ8/m+oPD9goRMhrPCb25ZA6aTyg7vcsq9IpuyED38kQSw1Na4UTZ /es/languages/markdown.js
sha384-SqGSUq0DMQ0OUQnQnTuVDCJyhANd/MFNj+0PF67S+VXgHpR8A4tPsf/3GoSFRmrx /es/languages/markdown.min.js
sha384-5XFaBhD9tnFP9OOhzsmHXGOdxpaTS5MQXnbN1hEfyHKalDi4J2jUj46ZpH1HISU5 /es/languages/nestedtext.js
sha384-/SUbXxx72mJbMNPOoNQHdExz/PWgTMuKKUQXZ02bm/qgienw72C81yKJK2hFljfz /es/languages/nestedtext.min.js
sha384-ohJ9Jj8Mwyy7EntP4tGMJEtH90WJNKu2C4l37N1kqyTHgbRJyGYUgFe9z3qy3/C8 /es/languages/nginx.js
sha384-tpFPEHvbpL3dYF4uFiVNuCUF62TgMzuW65u5mvxnaJYun1sZwxBsKv+EvVgv3yQK /es/languages/nginx.min.js
sha384-3ETIPQZ3mDkQp0yO3vWqaxcOnISPBk4oE4DrkgRfbMW6rhFcvu7N/P8tucGbapAC /es/languages/objectivec.js
sha384-eSkOKizj8aZA0WJaMmTJA3uqUtTkbZ7PXAADzDquzxCLyb1BMNgF9cn7/FIu0wFR /es/languages/objectivec.min.js
sha384-B+EjdRTJfuRQL8OfQPSh3FpJXyftaETF0bCfUNAm34365HyQ0yM6cjh+8qYsSEE2 /es/languages/perl.js
sha384-kW4vu/krgDKKOlEd71XhqvOJNxZuQ9t5Rwutcxm3/zfujAXe08IcLMX5Al0NGE72 /es/languages/perl.min.js
sha384-ll/P6hhycBXosJDJs3rYk+MWePLyi/3vqdtfOG0DepO2Txe4pkFjz1GaY9PYydyQ /es/languages/pf.js
sha384-OgdYEzbHjXEECvHgZe4NRcmfBJjT3ZPVSGLUFo6xZe4DmBtLi9atHdaBdBnsPi+O /es/languages/pf.min.js
sha384-JBkI+6623OoC1qCgG+MY/Ta0qRYSzTDH4NGMA+7U8RNOjkh7geFvYpRidvdHs3zT /es/languages/php.js
sha384-6Znh5S5q9F0hGNMtdaihFL3RJeMqL1a/UecjgzaBrhoxe4sjd5aiEOgokt7blhSW /es/languages/php.min.js
sha384-lbDR+U/5ETRHb0r5ElxxVnAt95EFhleDFZw7nkVPcRk3lbX9NsT/Ppg37FFNiv8+ /es/languages/php-template.js
sha384-dGJwrvnfo/JaY0lSDtJuhB6XXPmL9hSqOnIYndlN0eE1PoA9FFxd+VtaSfcacNDA /es/languages/php-template.min.js
sha384-TTDGPCrk8Dg2oW6NghGM5WJQPbi34BdYJj6yfsDiGXlM5os/SebXT6KzATp19rzo /es/languages/plaintext.js
sha384-XXx7wj9KPm08AyGoGzzFKZP2S7S+S5MbKMPnQcWUyhJ3EjHvLuctK/O1ioJnG2ef /es/languages/plaintext.min.js
sha384-F4RSDVgBBiOzTXLHkMeGKJDgpdhWDUb6NCDoz6BYnQohs3NkiWLi+wTlBgsb8fZX /es/languages/properties.js
sha384-Drd5kfuBp36sTS9lcJ+ai2UhYgBwhpYsRDl2T3useOowrqih3gTCBLSQI3M5lQQm /es/languages/properties.min.js
sha384-PrExPWxPTKzcQYHa2zx+ep07BBrr553zoc5lfxEdFJ6LyMpaaGDGZFmBt5wp0zO5 /es/languages/puppet.js
sha384-AD3TodU3dq//GRWPVK0bQi/Px1bVpPbCnAmqJ5eh95PeV2hmitDzKvL1PI39Q0n/ /es/languages/puppet.min.js
sha384-+5oyk7Ed3OlvEWGj8xracq/6e52BScKUN4kxcreNwB7kfRTVsAMs/aAJM58dzIFN /es/languages/python.js
sha384-ND/UH2UkaeWiej5v/oJspfKDz9BGUaVpoDcz4cof0jaiv/mCigjvy7RQ7e+3S6bg /es/languages/python.min.js
sha384-BSeMSSkpHXATzXVnQDrjF2DPTOBSrKP8QqV0DcEVYa5k6JK9CSYxFKyEhj+Kqnde /es/languages/python-repl.js
sha384-sW9zIYfNc+qN/lya5oAmIdFlVbXjPLcdYkPSdRMpxO/xI2jbDW/Q4Etvx02DFOmf /es/languages/python-repl.min.js
sha384-GLWbnkTbelVKeKv8VxFhtauUDfV8uqxjBPEEZ3WYks9zmbd1rFCWmdzGucZn0+ZQ /es/languages/r.js
sha384-T5hv8+GOm2ni1B0cuZtt+8T0cIMH1CTycc9OQQH0GLcIQhmeBosyhcmcIv4r/1ag /es/languages/r.min.js
sha384-NkArgjeYgi0WfPVefUQZ7YOmxymJdX/svrsiuRsXJKKhl2rKIp9sxIrMZLCCD8co /es/languages/roboconf.js
sha384-5LQ8XZbaR3kmVh0wCOpHq1l5hX9jiEwdtHnM6BsayLhjr8UF1MaJBqcaDeSynhPv /es/languages/roboconf.min.js
sha384-vs4jXytP3N3d5zRX15Fqc4u/kDI5jDr3PNYIvQ0mmmoU+o/yxJfu/+VYme6qIOa2 /es/languages/ruby.js
sha384-O4a+vELXT191NhKLE3TR5WQwDmQZ2izAhb2zETRxcPSXr6CJruqJ4a+GJpDlaqCF /es/languages/ruby.min.js
sha384-I4aH0szMeaCbcs8R7dhxA3p7ZBL/HFxnD5Gbz6l52kIrd/igSSFi/9sJCykNuL52 /es/languages/rust.js
sha384-1vvSh2x0WCtPLbkTMqNuf8JSZw8N5bSo9oONZ9vqU8NOBHPIuKt+kFdC8G5nA+P1 /es/languages/rust.min.js
sha384-lRhSX2XDrY27NzrAS1t4YaeRtwjsY41kFBbIEYltkmnsfSE7lbBJMQVds2u/MqTT /es/languages/scss.js
sha384-RDUehV4j9Do6iGkYq9Gjn3aUxh6x+NFER1sHpLUXsNoCFjah8Ysrlad8ukLbIr4J /es/languages/scss.min.js
sha384-dzLjhd9nNJH62idgKI1vZEKHRBtZXSgwWQdPR+emG7tfAN4BW2g+A5Xs2315Uxii /es/languages/shell.js
sha384-RKUoelG22/D7BV/bNpoGLNzdTgWRf/ACQX7y4BGyIzK6E+xUoXtm68WNQW2tSW8X /es/languages/shell.min.js
sha384-rBAFhyrcRcMNbVJ9g4k5y3eQDkjGdgoOb3oTWTbHgwyUgUNv3CK9wLsGy/d+52oa /es/languages/sql.js
sha384-8G3qMPeOeXVKZ0wGzMQHgMVQWixLw3EXFAcU+IFNLRe0WoZB5St3L3ZLTK62Nzns /es/languages/sql.min.js
sha384-G1Opo3HxELoJ+Z/56DILHVhE3vs0B5gDypWNlWxjd4T6tE+KuV8dvFmDD4qKFAqQ /es/languages/stylus.js
sha384-xDDS9KwHtv72OFksAoRLSOzzD4H5DFtcSDwClXtktWSgfzUa5GBVC+QCa+JbXJo6 /es/languages/stylus.min.js
sha384-LpDkuXFg1D+54cHhYqk9r9E4vKH0CGAnyBqiq5A6SnvPEIMTkMH8IN8i14JpJNhs /es/languages/swift.js
sha384-lJj3aAxzUpdk8StXN5j3OP20/Loadv+t8jYdMBYVqCaxtLHTpBUalFDsTPkC9Fov /es/languages/swift.min.js
sha384-CS3qiWid6Sod3yAiQwgPzy2ZerR00u/cwhnMxQrETuI74o006r1p5qj1U9Gdo4uD /es/languages/typescript.js
sha384-HHgazax8ozQ9RDWlJQyaFzaTk/OgTFRVHH+lcaYInkE8wVu5fnpkqkB3KUdzKcvE /es/languages/typescript.min.js
sha384-B6XNN+tQFI6cb/bizGIoHqASsFpNSzhB4rXEhX6IrjEdHLeJaR6Onmx2+ArhvnCm /es/languages/vbnet.js
sha384-LdqDRVWxc7cPE2ISZcBIeHoQAyfnXmEArz0layp8fOjceievL8eX9cV+HgneOkQ4 /es/languages/vbnet.min.js
sha384-C5Ib6vLvFc6BpxyyN5165sVTrN05Avl4ADMSVNVSmB61oPr42vOavsZlxOknqqWz /es/languages/wasm.js
sha384-FlAOV+6BVjUyajzW4twmqUvHxDYallf5jw5FewMZmsBHBuiJ/CJj1NZhNT1fHuzT /es/languages/wasm.min.js
sha384-OFoR8IZ+CFwcY8plx8HSDZNoCwLxc701CwdNGfoIEhSgwAbwhvInaxnEi3HYTt2Q /es/languages/xml.js
sha384-yFd3InBtG6WtAVgIl6iIdFKis8HmMC7GbbronB4lHJq3OLef3U8K9puak6MuVZqx /es/languages/xml.min.js
sha384-MX3xn8TktkjONV3aWF6Qn6WZyq2Lh/98p0v7D0qEoJ4WLdYjoAyXF/L/80q3qaEc /es/languages/yaml.js
sha384-4IiaMbQ0LBiRJYBGoAXsN+dV9qu/cGLES6IuVowdeCu/FAMY5/MQfD/bHXoL2YBb /es/languages/yaml.min.js
sha384-hK+QzfKnkrwE7Fgc3q6lpKfnWWKMecpkQObMVOPiwopZiJni16bBGVm37SMGcz6G /languages/apache.js
sha384-bvrESIqIr21pkx86VgiN+Vfq8sRk/6xTxMfbo0PDENLfqYr123El7PUCzqJmir4P /languages/apache.min.js
sha384-cZ/PFW75r8K/XQ1B9mwtLIR8nqjfV9wgjYdpBn5XCh8ev/XEJypupev/bfOSmdNP /languages/arduino.js
sha384-FWCBHZ/wFcOZ5LXWHV3JINd24NzsjJtrIkqaIlpVJpJcjng5ALM8AA/qumGEZQ4W /languages/arduino.min.js
sha384-qbbaBGYYg7PdopdWOGj8KdkBosUDY5PAe3aTMJKTqWcriPBJJzCVu5BlwNEwqr9U /languages/bash.js
sha384-ByZsYVIHcE8sB12cYY+NUpM80NAWHoBs5SL8VVocIvqVLdXf1hmXNSBn/H9leT4c /languages/bash.min.js
sha384-VZxKf0mjKYDwZIgrW+InqDfJ0YwYUFEMw/4YmpV1oKtVXFVmVq/Ga1vgq6zKTUqS /languages/c.js
sha384-mWenE7UXKnmYRcJ3mh+Os3iZ43BmFf9x3AZMM6gi/2sT6vxouPWspbTdREwWDO3w /languages/c.min.js
sha384-J4Ge+xXjXgzbK2FP+OyzIGHLfKU/RR0+cH4JJCaczeLETtVIvJdvqfikWlDuQ66e /languages/cpp.js
sha384-LMyrRAiUz6we2SGvYrwDd4TJoJZ+m/5c+4n4E64KVkfWFcZdlrs4Wabr0crMesyy /languages/cpp.min.js
sha384-oa3mX3v3QJKQk4D6BB1rIniLZbz+eTWMQuHXqBCLySe9o3KZ2pfkZqmWU0VE59ey /languages/crmsh.js
sha384-zN7rKt9V1OgNoMrsbrSGe1x9oL1N+6SczPLqhi2vRQNealAEGZBqROnVqMnc5FKL /languages/crmsh.min.js
sha384-8sbRwiU8Ar2M7+w//1u7YiI1e7KsmB4k3QbW/m1IW5FVH51HiOpR7g5QGE3RqTNi /languages/csharp.js
sha384-wWP4JQEhRVshehTP7lUMDn3yhDI2+398vN2QW5LBt1xIpK0Gfu4dPviO8tP9XRo5 /languages/csharp.min.js
sha384-r9czyL17/ovexTOK33dRiTbHrtaMDzpUXW4iRpetdu1OhhckHXiFzpgZyni2t1PM /languages/css.js
sha384-HpHXnyEqHVbcY+nua3h7/ajfIrakWJxA3fmIZ9X9kbY45N6V+DPfMtfnLBeYEdCx /languages/css.min.js
sha384-d6WNn2kPYgdezhgRmGehSkGVKwbg+ImJrGTA43yYg8VsBqYW5TakSDi/jbVjzqfD /languages/diff.js
sha384-yE0kUv4eZRBzwnxh0XmeqImGvOLywSpOZq2m0IH40+vBtkjS716NYEZyoacZVEra /languages/diff.min.js
sha384-dFC7/UlAe1aH832WvFmt6fwQFIha+bFdz4Jw/Stp0m65X0P0zgiyaSYVKpRyPCOo /languages/django.js
sha384-AqTOESQu37Lj9i0LQjA1B5Ju2XOJzwB7RR1NYcpo+JgnUF+UTdQi8km+UzU8uYBZ /languages/django.min.js
sha384-fqA1g+qpOamYxlJhxcdB70bFCuVXyCGBytozVm1cBnm4XM+eGfkKcY1eZST3noz4 /languages/dns.js
sha384-ThDmUDUbkLHd3YjqnAKK6DGmCqm/zinzT9ezHFHk+GPnKaM0dvEM3KfFeoQUt8KH /languages/dns.min.js
sha384-BBTUoNxAh4TWINjb22cp1mRwwVdcPyF6zzXZ/1EvQ28ls8EIGhlCKeLav689vLdl /languages/dockerfile.js
sha384-H3wUmCndJNBOuIIzcLSr2zLLZYs8PYuw6qKyENk7THEnYQJvOMDBu42P9XsJSRKw /languages/dockerfile.min.js
sha384-ntAXEL8ShY9wHJu8hbMihxOzycWqhCSOI/OUj/MO6QyT2dwFYwCmBY/NSOdXVmYA /languages/dsconfig.js
sha384-KAqJVHyldYmpO+CZL4qvQxr1GDHXYdvoNtMcN8IouYTVaq5ZiHp71eAjGFLUWl8M /languages/dsconfig.min.js
sha384-0euRt945mkwssRZQx/MQ80JXWV+utUeI4snhyIhqfW+vaRYj42RVM3nWaYt7gs9L /languages/dts.js
sha384-Ds5adkjVRA50t79I03B3O1Nf2RpYTYQ0m6arqivGOTJMiMffJyF+Jf4CmEil9LP9 /languages/dts.min.js
sha384-TyO+wwW4N4hAJzWrstAH3fz5H8WTWH3fG1m+pVwociHVFElEMw5b/HkZWMZGnp+0 /languages/fortran.js
sha384-WvivEbuG+ynOu3BbbceJknlKXBqe8Va2Zo7+TgCqtErB61cfboeQHQOyMapYhkUW /languages/fortran.min.js
sha384-lDCjdnxlW/GRZYzy4Zqkj833wJD7Hc2FP927RAtySEdrShMiUSXsWuFy1IC02qxU /languages/go.js
sha384-WmGkHEmwSI19EhTfO1nrSk3RziUQKRWg3vO0Ur3VYZjWvJRdRnX4/scQg+S2w1fI /languages/go.min.js
sha384-+9Rtg2Bz4pdOgkMjD/Y4IbvMzkuZqZyZwhBIbRD7254eY5Zm2Sf3UFI6Bt5tpyT5 /languages/graphql.js
sha384-yqNr+JW52pR9ZNw8CIHWgGMIrqhKhuOBDSlQ1ulf4Gt6wqi+VUMGHP5j6ReSSRY5 /languages/graphql.min.js
sha384-g/lhU6FXH73RQL4eFwkPk4CuudGpbHg6cyVZCRpXft3EKCrcQTToBVEDRStjYWQb /languages/http.js
sha384-wt2eEhJoUmjz8wmTq0k9WvI19Pumi9/h7B87i0wc7QMYwnCJ0dcuyfcYo/ui1M6t /languages/http.min.js
sha384-JSUMPR+WT0h/7NlqXi1Al9bVlNT31AeZNpAHttuzu+r02AmxePeqvsZkKqYZf06n /languages/ini.js
sha384-QrHbXsWtJOiJjnLPKgutUfoIrj34yz0+JKPw4CFIDImvaTDQ/wxYyEz/zB3639vM /languages/ini.min.js
sha384-pYIeBYeCE96U9EkPcT4uJjNWyrB1BKB41JIadYJbvmGa5KacaoXtSQOUpBfeyWQX /languages/java.js
sha384-uUg+ux8epe42611RSvEkMX2gvEkMdw+l6xG5Z/aQriABp38RLyF9MjDZtlTlMuQY /languages/java.min.js
sha384-vJxw3XlwaqOQr8IlRPVIBO6DMML5W978fR21/GRI5PAF7yYi2WstLYNG1lXk6j9u /languages/javascript.js
sha384-44q2s9jxk8W5N9gAB0yn7UYLi9E2oVw8eHyaTZLkDS3WuZM/AttkAiVj6JoZuGS4 /languages/javascript.min.js
sha384-/y3ED9ClCKWhLJRddCiDiig0BhfVYRvJs8doJ3tnHsFTxeHect3A6odC84mYCzIF /languages/jboss-cli.js
sha384-l/9Uw2IKYxqWShUl/tjB8ntQuuyvxl+Y6SjEVbTZPuDxgQBWWFk3/L+a9Xq3kdRv /languages/jboss-cli.min.js
sha384-dq9sY7BcOdU/6YaN+YmFuWFG8MY2WYJG2w3RlDRfaVvjdHchE07Ss7ILfcZ56nUM /languages/json.js
sha384-RbRhXcXx5VHUdUaC5R0oV+XBXA5GhkaVCUzK8xN19K3FmtWSHyGVgulK92XnhBsI /languages/json.min.js
sha384-UjoANPpyYDKhhXCD7M94TUBIvEg+Yey//mTGwAKIPkAcmpT4QVk8D47YYWumt/ZR /languages/kotlin.js
sha384-vfngjS9mwSs6HkzR9wU3mDDip7sa8TLKAxsuQ9+ncUHU25slHzHOdx/0FWxvbg4I /languages/kotlin.min.js
sha384-L+/8jDq2xFnFlaL5asbKO5pHOpaRojPndHjL9uvQ0QDo3KXeAsCdhkETUkDPLOsC /languages/ldif.js
sha384-6K5LosLSpBmsgch8WDi4VAu8AFGGqFHLbaj8VyhpemdlB1u4nq5f9JMVU7mECgFN /languages/ldif.min.js
sha384-1c9TXIjKaFE96Q8dzV+3AF30su8LWfRZ6/PIqg1gPNQo+LMeGHwB602qIjQQ+CgC /languages/less.js
sha384-nT7qGhTl7ILVe2/0D834KL+fN+VL4uJg7GFmHHF8YMIg3LSbOrihvebWz6A6KLMD /languages/less.min.js
sha384-/Ml+gzp/rkQcZkCwBqpVjCj028T6aTnOF/LCRJH8LBE5xcPcTkntQwJ5KGMMNLI3 /languages/lua.js
sha384-T04Yu4dcDCykCMf4EbZ62u3nURYEVkpphRGFhF/cMu+NrtDqoRHgbVOZz7hHdcaO /languages/lua.min.js
sha384-U+zIQPoVdPCO0o4poik2hYNbHtNm+L5OojDTulgIeEZTNz+LooLAm72d66mNjwKD /languages/markdown.js
sha384-mCUujHHbWJEjcupTTfWOk9YR3YCYNHaA578+TTXUd4LPi7fGNuMQbysbl1pmcIGd /languages/markdown.min.js
sha384-k9UYtw3lFjLkWskACwlyD2jek4OcRK/8nWhXlm21hzGwHNBlfVIj3K7LyYOKd4D4 /languages/nestedtext.js
sha384-vqNCsfwdY8G3LMt7gIKLOVi51hjD506kckOiKh8fF3aP6JefnON0lvvEOH7GZPne /languages/nestedtext.min.js
sha384-OtoDZeQykEsQoFzaA50vgmgr+D3F8WIaXZ0CZfYFivHEpkwCpRKT5Ptmuhjr5bfJ /languages/nginx.js
sha384-p6UV3HZc7zs9wUF6j4Knk3bpx1/JnhlwDoFnKJAOogB1cUi32u31NlnZ2s2dW8IR /languages/nginx.min.js
sha384-Cc1k3KuhHQqdKFz/qLsQbf9E1rahGF9daZ9proh9kVL6eww2g3xEHhMLe7YQka0z /languages/objectivec.js
sha384-laCnSBtpGFl9ww6pMsbiDiJocbu+HlV9qgfWjOoArDqQrnlxH3Qm9kia5N2cicKM /languages/objectivec.min.js
sha384-YKOtRjfzHo4SHG+iI5acI0B8GrsAlqbQpZzAKKR/oABDfo0Qw6fdjwWtHY1He+ih /languages/perl.js
sha384-J8kCjl82Po/VNpumPop593F3EckTvJlnUS2ugGW46Zjts8BPGl6iNkXjcenKcwCx /languages/perl.min.js
sha384-LFixjuctjXbHtN11FTqpmeAQwX9LCM2SY2tj9VC3f9aQLmQeNb8Ns0Uu6lKpbz61 /languages/pf.js
sha384-qZcRyhSQHLwNANrkp9RM43BAlw9rKj7SnAN98sGmMEADm/8BMVSJo/rRiN06uY6L /languages/pf.min.js
sha384-S1JDGPScVg8ikNKLZc4CSP0ZxLiJ7bOJMzTLfOzQiCxR6wPqAa+YtauHJXQpc2GV /languages/php.js
sha384-c1RNlWYUPEU/QhgCUumvQSdSFaq+yFhv3VfGTG/OTh8oirAi/Jnp6XbnqOLePgjg /languages/php.min.js
sha384-56Iyz0oX8ZJZPmm/9pflGG2cVp/0NER9AEbckNsLoTXXK5uMPpVWUkf/WL1BPzEb /languages/php-template.js
sha384-i5dGKRLoml9823i21v5ltbNFQCB7OAwkUve4TaJrwSnXRQ1kOjT+Wa8jX/EOj434 /languages/php-template.min.js
sha384-IHapUcPkNR+7JNsR+qYSVYGCE3Dpzo2//VYWtmGYrw3eQG1RItQ7HYq6aK1Jo/6L /languages/plaintext.js
sha384-ofjxHpechXkaeQipogSyH62tQNaqAwQiuUHOVi4BGFsX5/KectIoxz16f8J/P5U0 /languages/plaintext.min.js
sha384-NKkO1gNQ8VMU2V+XXBsVWRCIZrKnCkWzbENE3b2bzgP4Ft/zybEvc9VjPhlJZWHw /languages/properties.js
sha384-tlJaeulTOJz9iqadCPTY2JwJVayIS3pMaQkEOgibHjwjmI6Fve8TLKvsR8tfmKwa /languages/properties.min.js
sha384-z9/ZgavB8oSmMO03wcEMuvJ+ypnVrLSTLGlsmLxdTl3ojio11alM7BUv47naFG9g /languages/puppet.js
sha384-fGC9yhxS2ALC1B7VH3QJtJB74sL8L9HGTepwFeHWnStwNBaEG76aCmL4Ll/dG3r8 /languages/puppet.min.js
sha384-zdZio5RcGiKQJCpe/1IXujPle3bIY8sbmvCabSU5G5GzWAzZtoRZfg9QAQXCL08q /languages/python.js
sha384-IP4vv4Aoh9Lyg8QyzVkAmn2JGoDCpgVHzVSrD3Z+rVyn7+s4wx4pRjv+go3TEwfj /languages/python.min.js
sha384-7jEUoPRiHUgJOTai1kMkoxn2EnF86LMvN/MagHBb2SlmmV6Xd4jlrgQfLTzgM3sP /languages/python-repl.js
sha384-bKSBGjy2/8jltjSAlvCjAvEvjy8osMZfj37sBThcXS7n6SppraMRghmLmAxiapyN /languages/python-repl.min.js
sha384-Xa3MEXJyV9PD/wnbdHTdqvipEl9QqodA35i6Nmw/6wqrvQ585Q8EDfz7f2UCuYpU /languages/r.js
sha384-+z7INDMj7HMs67TuLfoyKa6TUHdTweahANtJ1Spg6uCa8/f1jFUf238jj53TDxmP /languages/r.min.js
sha384-GC5tT/7mGPdnqdizdiamOm+Sh3VbY5a6CneYK9jcz24b5zaNsBXdQsHqkvObREJx /languages/roboconf.js
sha384-Z9gnV9+ow776+3ev5SPwjO6FLYQSwGZK4N5mRQ0mVHBVkpq98BgOc6o6+S6M0aJH /languages/roboconf.min.js
sha384-AE7f30oAuQtqmFee9hPd2uoo44ZkyUY2wQL7DjjENhh2wrvS6q4mpxGtAxeCxiRQ /languages/ruby.js
sha384-pFZpTUpdH4YEXSenc9hfKZ4uCv2IQoJQCIlIHpA0fM2cvTVH8LuzQMNcGSRGeJG0 /languages/ruby.min.js
sha384-CA6FQ5i08WYjgGIhQBrXKmcJg42apGjTP9b5WqttVw3cYEtXwHHGo+XJLYS7u7F2 /languages/rust.js
sha384-ZQJ5PCEftpFqCZkLDs96CSDGddxBultwqTdlxjnJ5h2doMAQv0n1x66w7T/JQEyy /languages/rust.min.js
sha384-fwYddFsITuK2bPhi9RuIzwi4PTULEXgtEJsQzTdx97vOS/GHfrk+aNSLxEHgzQa5 /languages/scss.js
sha384-6u+QpCDqQidb5pcO+yBqy0xLJ30x30VlrFvXm8J84LMwGIw9q3U4u+Z9vFXlhB5x /languages/scss.min.js
sha384-KW3ZDReTAemYUfVHvH1MNQ/v6agCYYdMGdMteP/yVV+NetIJeDMx0ruUMTbr/SD3 /languages/shell.js
sha384-PDEMny3uYpCrSKwqVGLAwqCsc9u+9hYXauxVPqO6RXmlxSNKLoRByEBigU5lahmK /languages/shell.min.js
sha384-Dy7I/j0yJlyliWiNrkNqXfxDrbN65q40s3JColgTYZQ7QJa7lcmK0WUL3i00/T51 /languages/sql.js
sha384-8q00eP+tyV9451aJYD5ML3ftuHKsGnDcezp7EXMEclDg1fZVSoj8O+3VyJTkXmWp /languages/sql.min.js
sha384-zoSc+TuKb10CxRmrZq/TRFkoAEM6ozSv3Cf8r50TxTx1r1Hcqaa5leVOEES2zauv /languages/stylus.js
sha384-Rd520i2dTJt7Zlfxu1YaFucV2Fd029x6Zczn9h0nD/AruF9OBK3UjS7wa0N5z9PI /languages/stylus.min.js
sha384-Q1hSwaZr828HvfGGkcH9/K6Cg93VFYOWEZ8cpL7bUdzvzrSurur5RjoZjn46PokC /languages/swift.js
sha384-CYmrQ9dmDVxuVoM185jHQsjhiLlG/kQfabzRdOYsfUV2AQvpjQNrd2zVCpCC7N5j /languages/swift.min.js
sha384-yZXtQC/OmWoPykosK7vE1nCvV4E/six6+apjNau4JwBkejkea5nP7VBEJJkGnvoF /languages/typescript.js
sha384-ORwtVEfrCZ0gzGacgmfv1wOtxcPIaVfHKwq8dKQjObRwx3qpKjsSg1ldTu1PEgXd /languages/typescript.min.js
sha384-NRGkScJ2K7VJUsHL7H9eHncQMh99wPeeOYyPkHZiUfihAg+Xb0j1JotJI3DkqX5f /languages/vbnet.js
sha384-+y0KLxbRrWxqnfGRhWWQTHHEwDd1OhkOacgf5QfJa+5ydoCf3SWObb+XrzxBSfqa /languages/vbnet.min.js
sha384-ry6bgnkpMB819ITiAptb7x+iphp9TkAJTFl2NZQfF7JCOxZE+DcJvsAUvP2t4Ccn /languages/wasm.js
sha384-fWMR10q8HCFcv4u/2S/P5JHw477fD1akWW/mGsZNig4vAOk4135GEWJft9llui8U /languages/wasm.min.js
sha384-+PuZYFfVX2UQZU2yKt/FsJUZNUPzZWxW7auXltsaecr1xLvzBYF3c5gYoyOs1++x /languages/xml.js
sha384-jgkY4GMNWfQcLLIoP1vg3FWXflDrRhcSXGBW6ONIWC2SOIv5H1Pa57sXs+aomCuZ /languages/xml.min.js
sha384-tB5cwwsX4Ddp7P4d+ZInDb3nt4ihEEglHXoQ18eVLlT7soEn7bfGfABWKIn1l+H2 /languages/yaml.js
sha384-WC56y8OaFPt5Kj2HX6JAumxUYEjQmBDcSTJy2pn/N8g7dg1hKjeNVrJYoxlpeVmz /languages/yaml.min.js
sha384-d7HfMFgkwgcFy83evsj/t88XgBwxHDp3wx+D5mGfxMe8HmOkDhvPOmWFo0J2gj7N /highlight.js
sha384-OQNxVX5DkJfK1cEmo2g7Orcb37mqIcnmJu/cZGAng/cdSgkQgM3oL3TeIdGCn8NZ /highlight.min.js
```
