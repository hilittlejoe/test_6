# ҳ���Ż�
�Ż���Ŀ��ʹ���˳������Ż���ʽ������ҳ��Ľű�����˳���Լ�Ӱ��FSL�ȵ���������һЩ���������Ż����ֶν���������
## Index.htmlҳ����Ż�
1.index.html�ķ���·��Ϊ��[index.html](https://chensdog.github.io/chenchao/p2/index.html)
2.�Ż�����˵����
   - �������ļ�`//fonts.googleapis.com/css?family=Open+Sans:400,700`�ƶ���ҳ��`body`�ײ������������ļ��ļ��ض���ҳ����ʾ����Ӱ�첢���Ƿǳ�����˽�����Ὣ�ŵ�ҳ��ײ����ȼ���ҳ�����ݽ��н���
   - ��`js`�ļ��ļ��ر�Ϊ`async`
       ```
       <script src="js/perfmatters.js"></script>  
       <script src="http://www.google-analytics.com/analytics.js"></script>
       ����Ϊ��
       <script async src="js/perfmatters.js"></script>
       <script async src="http://www.google-analytics.com/analytics.js"></script>
       ```
       ���ҽ�`analytics.js`�ƶ���body��ײ�
   - ��Դ�ļ�ѹ������
   ��ҳ���о�̬��Դ�ļ�����ѹ������������`views/images/pizzeria.jpg`��ѹ�������ɴ���`2MB`��Ϊ`4kb`���ҵ��ļ�
   - ��`css`�ļ�����Ǩ�Ƶ�`html`�У�����`css`һ�����ļ������Ǻܶ࣬���Կ���Ƕ�뵽ҳ��`<style>`��ǩ��
## pizza.htmlҳ����Ż�
1.ִ��·��Ϊ:[pizza.html](https://chensdog.github.io/chenchao/p2/views/pizza.html)
2.�Ż��ķ���
   - ������ƶ�����ͼƬ��С�ߴ����С��`5ms`
��main.js�н��м�����߼���Ϊ��ʽ��`%`���Ӷ�ȡ��Ӱ��FSL��`px`�����Ҿ�������ѭ����`document.getXX`����`document.queryXX`��ʹ�ã���ͨ��`document`��ȡ�������ݻ��浽`�ֲ�����`����ѭ���в����ֲ��������Ż��������£�
        ```
            var rpc = document.querySelectorAll(".randomPizzaContainer");
        	var length = rpc.length || 0;
        	//�ж�size�Ƿ����㣬large��small��middle��������
        	//���ٷֱ��ƶ����ڲ��������жϣ�
        	function sizeSwitcher (size) {
              switch(size) {
                case "1":
                  return 25;
                case "2":
                  return 33.33;
                case "3":
                  return 50;
                default:
                  console.log("bug in sizeSwitcher");
              }
            }
        	//��ȡÿ���ƶ������ͼƬ���յ�width�İٷֱ�
        	var newSize = sizeSwitcher(size);
        	//����������width��ʱ�����ðٷֱȣ�����ڸ�Ԫ�صĿ������������
            for (var i = 0; i < length; i++) {
              rpc[i].style.width = newSize + "%";
            }
     ```

   - �����������ﵽ`60fps`
   1.����ҳ���� `.mover`���ƶ���Ӧ�ú������ط��й�������˽��ⲿ����ʽ�����`will-change:transform,left`,��Ȼ�����Զ�����������ڼ���������
2.ȥ��`px`����`%`�����Թ۲쵽`.mover`Ԫ�ؼ��ϣ����е�`left`���������`body`�������еģ���˻�ȡ��ǰ������Ӵ�`clientWidth`����������
     ```
    
      var scroll_top = document.body.scrollTop || document.documentElement.scrollTop;
      var client_width = document.body.clientWidth || document.documentElement.clientWidth; 
      for (var i = 0; i < items.length; i++) {
        var phase = Math.sin((scroll_top / 1250) + (i % 5));
        items[i].style.left  = ((items[i].basicLeft + 100 * phase) * 100)/client_width + "%";
      }
     ```

## ����pizza.html�и�����Ϊ��bug
   - ҳ���ж���`<head>`δ���`<meta charset="UTF-8">`��˿��ܲ���`��������`
   - ��`main.js`��ʹ����`documnt.body`����ȡ�������ĸ߶ȣ�����ҳ���в�δʹ��`DTD`����˻�ȡ���Ľ����`document.body.scrollTop`һֱΪ`0`
    ���Ϲ۵�����Ǵ��������Ϊ��Ҳ����ڴ���
