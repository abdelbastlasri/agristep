import fitz
import sys

sys.stdout.reconfigure(encoding='utf-8')

doc = fitz.open(r'C:\Users\ABDELBAST\repos\agristep\pdf\catalogue agrestep 2023.pdf')

for i in range(doc.page_count):
    page = doc[i]
    # Extract text with different method - sort by position
    dict_blocks = page.get_text('dict')
    
    # Process all text blocks sorted by vertical position
    all_texts = []
    for b in dict_blocks['blocks']:
        if b['type'] == 0:
            for line in b['lines']:
                y = round(line['bbox'][1], 1)
                x = round(line['bbox'][0], 1)
                text_parts = []
                for span in line['spans']:
                    text_parts.append(span['text'])
                line_text = ''.join(text_parts)
                all_texts.append((y, x, line_text, b['bbox']))
    
    all_texts.sort()
    
    print(f"\n{'='*80}")
    print(f"PAGE {i+1} - SORTED TEXT BY POSITION")
    print(f"{'='*80}")
    for y, x, text, bbox in all_texts:
        print(f"Y={y:6.1f} X={x:6.1f} | {text}")

doc.close()
