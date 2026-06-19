import fitz
import os

doc = fitz.open(r'C:\Users\ABDELBAST\repos\agristep\pdf\catalogue agrestep 2023.pdf')
outdir = r'C:\Users\ABDELBAST\repos\agristep\pdf\extracted_images'
os.makedirs(outdir, exist_ok=True)

for i in range(doc.page_count):
    page = doc[i]
    images = page.get_images()
    print(f"Page {i+1}: {len(images)} images")
    for j, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        ext = base_image["ext"]
        w = base_image["width"]
        h = base_image["height"]
        fname = f"page{i+1}_img{j}_{w}x{h}.{ext}"
        fpath = os.path.join(outdir, fname)
        with open(fpath, "wb") as f:
            f.write(image_bytes)
        print(f"  Saved: {fname} ({len(image_bytes)} bytes)")

doc.close()
print(f"\nExtracted images to: {outdir}")
