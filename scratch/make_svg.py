import base64

with open('public/assets/logo-cropped.png', 'rb') as f:
    encoded = base64.b64encode(f.read()).decode('utf-8')

svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3176 576" width="100%" height="100%"><image href="data:image/png;base64,{encoded}" width="3176" height="576"/></svg>'

with open('public/assets/logo.svg', 'w') as f:
    f.write(svg)

print("Created public/assets/logo.svg successfully!")
