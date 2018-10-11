import { ReportBuilderModule } from './report-builder.module';

describe('ReportBuilderModule', () => {
  let reportBuilderModule: ReportBuilderModule;

  beforeEach(() => {
    reportBuilderModule = new ReportBuilderModule();
  });

  it('should create an instance', () => {
    expect(reportBuilderModule).toBeTruthy();
  });
});
