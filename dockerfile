FROM node:18

# Set the working directory
WORKDIR /app

# Install Node.js and npm packages
RUN npm install -g @wdio/cli

# Install local WebDriverIO packages
RUN npm install --save-dev @wdio/local-runner \
    @wdio/sync \
    @wdio/cucumber-framework \
    wdio-image-comparison-service \
    cucumber-html-reporter

# Install Firefox and Geckodriver
RUN apt-get update && \
    apt-get install -y firefox-esr && \
    wget https://github.com/mozilla/geckodriver/releases/download/v0.30.0/geckodriver-v0.30.0-linux64.tar.gz && \
    tar -xvzf geckodriver-v0.30.0-linux64.tar.gz && \
    mv geckodriver /usr/local/bin/

# Install Chrome and Chromedriver
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' && \
    apt-get update && \
    apt-get install -y google-chrome-stable && \
    CHROMEDRIVER_VERSION=`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE` && \
    wget -N https://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip && \
    mv chromedriver /usr/local/bin/

# Install Edge and Edgedriver
RUN wget https://packages.microsoft.com/keys/microsoft.asc -O microsoft.asc
RUN apt-key add microsoft.asc
RUN sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge.list'
RUN apt-get update && apt-get install -y microsoft-edge-stable
RUN apt-get install -y jq

# Download and install EdgeDriver
RUN wget https://msedgedriver.azureedge.net/124.0.2464.2/edgedriver_linux64.zip && \
    unzip edgedriver_linux64.zip && \
    mv msedgedriver /usr/local/bin/ && \
    rm edgedriver_linux64.zip

# Set environment variables
ENV PATH="/app/node_modules/.bin:${PATH}"

COPY "./*" /app 