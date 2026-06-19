import fitz
import sys

sys.stdout.reconfigure(encoding='utf-8')
doc = fitz.open(r'C:\Users\ABDELBAST\repos\agristep\pdf\catalogue agrestep 2023.pdf')
print(f"Total pages: {doc.page_count}")

for i in range(doc.page_count):
    page = doc[i]
    print(f"\n{'='*80}")
    print(f"PAGE {i+1}")
    print(f"{'='*80}")
    
    # Get text blocks with details
    blocks = page.get_text('dict')
    for b in blocks['blocks']:
        if b['type'] == 0:  # text block
            for line in b['lines']:
                for span in line['spans']:
                    print(f"[{span['font']}] (size={span['size']}) {span['text']}")
        elif b['type'] == 1:  # image block
            print(f"[IMAGE: {b['width']}x{b['height']}]")

doc.close()
