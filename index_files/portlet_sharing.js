Liferay.PortletSharing = {
	showNetvibesInfo: function(netvibesURL) {
		var popup = Liferay.Popup(
			{
				width: 550,
				modal: true,
				title: '\u0056\u006f\u0065\u0067\u0020\u0061\u0061\u006e\u0020\u004e\u0065\u0074\u0076\u0069\u0062\u0065\u0073\u0020\u0074\u006f\u0065'
			}
		);

		var portletURL = Liferay.PortletURL.createResourceURL();

		portletURL.setPortletId(133);

		portletURL.setParameter("netvibesURL", netvibesURL);

		jQuery.ajax(
			{
				url: portletURL.toString(),
				success: function(message) {
					popup.html(message);
				}
			}
		);
	},
	showWidgetInfo: function(widgetURL) {
		var popup = Liferay.Popup(
			{
				width: 550,
				modal: true,
				title: '\u0041\u0061\u006e\u0020\u0065\u006c\u006b\u0065\u0020\u0077\u0065\u0062\u0073\u0069\u0074\u0065\u0020\u0074\u006f\u0065\u0076\u006f\u0065\u0067\u0065\u006e'
			}
		);

		var portletURL = Liferay.PortletURL.createResourceURL();

		portletURL.setPortletId(133);

		portletURL.setParameter("widgetURL", widgetURL);

		jQuery.ajax(
			{
				url: portletURL.toString(),
				success: function(message) {
					popup.html(message);
				}
			}
		);
	}
};