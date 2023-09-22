echo "Switching to branch main"
git checkout main
echo "building app..."
npm run build

echo "Deploying files to server"
scp -r dist/* jeremy@154.56.60.138:/var/www/jeremyhayes.me/

echo "DONE!"