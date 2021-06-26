git clone https://github.com/svasandani/get-risky.git
cp -r get-risky/website/* . -f
rm -rf get-risky/
git add .
git commit -m "Manual update"
git push origin