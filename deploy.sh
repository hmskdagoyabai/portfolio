npm run build
aws s3 rm s3://hmsk.work --recursive
aws s3 cp dist/ s3://hmsk.work --recursive
