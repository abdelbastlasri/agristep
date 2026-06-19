from PIL import Image
import os

img_dir = r'C:\Users\ABDELBAST\repos\agristep\pdf\extracted_images'
for f in sorted(os.listdir(img_dir)):
    if f.endswith('.png'):
        img = Image.open(os.path.join(img_dir, f))
        print(f"{f} -> size={img.size}, mode={img.mode}")
