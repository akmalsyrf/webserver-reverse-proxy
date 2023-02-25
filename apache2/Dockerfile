FROM ubuntu/apache2
RUN a2enmod proxy
RUN a2enmod proxy_http
RUN /etc/init.d/apache2 restart

COPY default.conf /etc/apache2/sites-available/000-default.conf