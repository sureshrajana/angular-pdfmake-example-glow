import { Component, OnInit, VERSION } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  public export(): void {
    const docDefinition = {
      content: [
        { text: 'NGlow Energy Pvt Ltd', style: 'header' },

        { text: 'To,', style: 'subheader' },
        'Mr. Pratap Raju Garu,',
        'Etikoppaka, Yellamanchilli.',
        ' ',
        {
          text: 'Commercial Proposal for Supply of Solar Power Plant',
          style: 'subheader',
        },
        'With',
        { text: 'Elevated Structure', style: 'subheader' },
        ' ',
        {
          text: 'Sub:- Commercial Proposal for Supply of Solar PV Power Plant with Elevated structure.',
          style: 'subheader',
        },
        ' ',
        { text: 'Dear Sir,', style: 'subheader' },
        'Thank you for giving NGlow opportunity to submit the commercial proposal for rooftop solar power plant installation Elevated Solar Rooftop with sheet, Etikoppaka, Yellamanchilli Andhra Pradesh, As per the initial assessment done by our team 25kWp capacity rooftop solar power plant at your Location. As per the discussion with you, we are providing costing for the 25KW on the Elevated Solar rooftop plant with sheet for waterproof.',
        ' ',
        {
          text: 'Sir, we are pleased to present our commercial proposal; having said this, please find below a comprehensive look at the scope, deliverables, and commercials for the same.',
          style: 'subheader',
        },
        ' ',
        {
          text: 'We thank you once again and look forward to building and nurturing our relationship for the times to come.',
          style: 'subheader',
        },
        ' ',
        { text: 'Yours Sincerely,', style: 'subheader' },
        'Naresh.Rajana',
        'NGlow Energy Pvt Ltd,',
        '9701322611',
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
        subheader: { fontSize: 12, bold: true, margin: [0, 5, 0, 5] },
        contact: { fontSize: 12, margin: [0, 0, 0, 10] },
      },
    };

    pdfMake.createPdf(docDefinition).download('test.pdf');
  }
}
