import React from 'react';
import './App.css';

const SpanBold = ({ children, fontWeight, ...props }) => (
  <span style={{ fontWeight }}{...props}>{children}</span>
)
const SpanNormal = ({ children, fontWeight, ...props }) => (
  <span style={{ fontWeight }}{...props}>{children}</span>
)

SpanBold.defaultProps = {
  fontWeight: 'bold'
}

SpanNormal.defaultProps = {
  fontWeight: 'normal'
}

class Medicine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      btnReadyColor: this.btnStart.color, btnReadyName: this.btnStart.name,
      btnShowFormColor: this.btnStart.color, btnShowFormName: this.btnStart.name,

      type: '',
      cardNumber: '', patientName: '', doctor: '', tooth: '',
      complaints: '', complaintsFix: '',
      anamnesisMorbi: '', anamnesisMorbiFix: '', start1: '3', start2: 'день',
      anamnesisVitae: '', anamnesisVitaeFix: '', pregnancy: '1', childbirth: '1', birthWeight: '',
      statusPraesens: '', statusPraesensFix: '', generalCondition: 'середнього ступеню важкості', age: '',
      woundArea: '', woundSide: '', injuryDate: this.fullDate, injuryTime: '', injuryReason: '',
      woundType: '', woundLength: '', woundWidth: '', woundDepth: '',
      woundForm: '', woundLedges: '', woundBleeding: '', woundAliens: '',
      statusLocalis: '', statusLocalisFix: '', crownDestruction: "частково", area: '',
      diagnosis: '', diagnosisFix: '', diagnosisCap: '', table: "Стіл загальний", sowing: false,
      drug1: false, drug1Content: '', drugName1: '', drugDay1: "",
      drug2: false, drug2Content: '', drugName2: '', drugDay2: "",
      drug3: false, drug3Content: '', drugName3: '', drugDay3: "",
      drug4: false, drug4Content: '', drugName4: '', drugDay4: "",
      drug5: false, drug5Content: '', drugName5: '', drugDay5: "",
      drug6: false, drug6Content: '', drugName6: '', drugDay6: "",
      operation: '', operationCap: '', weight: '',
      operation1: '', protocolNumber: '', operationDate: this.fullDate, operationTime: '',
      operationContent: '', operationContentFix: '', pliers: '', elevators: '',
      sutureType: '', sutureMaterial: '', sutureSize: '',
      duration: '', surgeon: '', assistant: '-', anesthetist: '',
      lastTime: '', lastDate: '',
      showAllContent: false, showForm: true, showMainForm: false, showCheckLine: false,
      showPerioLines: false, showSkinWoundLines: false,
      showManualPanel: false, showMP1: false, showMP2: false, showMP3: false, showMP4: false,
      showMP5: false, showMP6: false, showMP7: false,
      daysAmount: 0, recommendations: ' відсутні.',
      hb: '', er: '', leu: '', pal: '', segm: '', eoz: '', limf: '', rse: '',
      uColor: 'світло-жовта', uOpacity: 'прозора', uWeight: 'м/c', uPh: '6,0', uProtein: '-', uLeu: '2-3', uEp1: '1-2', uEp2: '0-1',
      glucose: '', enterobioz: 'не виявлено.', dung: 'не виявлено.',
      showUrine: false, showEpicrisis: false, showEpicrisisBtn: true,
    }

    this.typeChange = this.typeChange.bind(this);
    this.cardNumberChange = this.cardNumberChange.bind(this);
    this.patientNameChange = this.patientNameChange.bind(this);
    this.doctorChange = this.doctorChange.bind(this);
    this.toothChange = this.toothChange.bind(this);
    this.start1Change = this.start1Change.bind(this);
    this.start2Change = this.start2Change.bind(this);
    this.pregnancyChange = this.pregnancyChange.bind(this);
    this.childbirthChange = this.childbirthChange.bind(this);
    this.birthWeightChange = this.birthWeightChange.bind(this);
    this.allFixHC = this.allFixHC.bind(this);
  }

  typeChange(event) {
    this.setState({
      type: event.target.value,
    });
  }
  cardNumberChange(event) {
    this.setState({ cardNumber: event.target.value });
  }
  patientNameChange(event) {
    this.setState({ patientName: event.target.value });
  }
  doctorChange(event) {
    this.setState({ doctor: event.target.value });
  }
  toothChange(event) {
    this.setState({
      tooth: event.target.value,
    });
  }
  start1Change(event) {
    this.setState({
      start1: event.target.value,
    });
  }
  start2Change(event) {
    this.setState({
      start2: event.target.value,
    });
  }
  
  pregnancyChange(event) {
    this.setState({
      pregnancy: event.target.value,
    });
  }
  childbirthChange(event) {
    this.setState({
      childbirth: event.target.value,
    });
  }
  birthWeightChange(event) {
    this.setState({
      birthWeight: event.target.value,
    });
  }
  generalConditionChange = event =>
    this.setState({
      generalCondition: event.target.value,
    });
  ageChange = event =>
    this.setState({
      age: event.target.value,
    });
  injuryDateChange = event =>
    this.setState({
      injuryDate: event.target.value,
    });
  injuryTimeChange = event =>
    this.setState({
      injuryTime: event.target.value,
    });
  injuryReasonChange = event =>
    this.setState({
      injuryReason: event.target.value,
    });
  woundAreaChange = event =>
    this.setState({
      woundArea: event.target.value,
    });
  woundSideChange = event =>
    this.setState({
      woundSide: event.target.value,
    });
  woundTypeChange = event =>
    this.setState({
      woundType: event.target.value,
    });
  woundLengthChange = event =>
    this.setState({
      woundLength: event.target.value,
    });
  woundWidthChange = event =>
    this.setState({
      woundWidth: event.target.value,
    });
  woundDepthChange = event =>
    this.setState({
      woundDepth: event.target.value,
    });
  woundFormChange = event =>
    this.setState({
      woundForm: event.target.value,
    });
  woundLedgesChange = event =>
    this.setState({
      woundLedges: event.target.value,
    });
  woundBleedingChange = event =>
    this.setState({
      woundBleeding: event.target.value,
    });
  woundAliensChange = event =>
    this.setState({
      woundAliens: event.target.value,
    });
  crownDestructionChange = event =>
    this.setState({
      crownDestruction: event.target.value,
    });
  areaChange = event =>
    this.setState({
      area: event.target.value,
    });
  drugName1Change = event =>
    this.setState({
      drugName1: event.target.value,
    });
  drugName2Change = event =>
    this.setState({
      drugName2: event.target.value,
    });
  drugName3Change = event =>
    this.setState({
      drugName3: event.target.value,
    });
  drugName4Change = event =>
    this.setState({
      drugName4: event.target.value,
    });
  drugName5Change = event =>
    this.setState({
      drugName5: event.target.value,
    });
  drugName6Change = event =>
    this.setState({
      drugName6: event.target.value,
    });
    drugDay1Change = event =>
    this.setState({
      drugDay1: event.target.value,
    });
    drugDay2Change = event =>
    this.setState({
      drugDay2: event.target.value,
    });
    drugDay3Change = event =>
    this.setState({
      drugDay3: event.target.value,
    });
    drugDay4Change = event =>
    this.setState({
      drugDay4: event.target.value,
    });
    drugDay5Change = event =>
    this.setState({
      drugDay5: event.target.value,
    });
    drugDay6Change = event =>
    this.setState({
      drugDay6: event.target.value,
    });

  weightChange = event =>
    this.setState({
      weight: event.target.value,
    });
  protocolNumberChange = event =>
    this.setState({
      protocolNumber: event.target.value,
    });
  operationDateChange = event =>
    this.setState({
      operationDate: event.target.value,
    });
  operationTimeChange = event =>
    this.setState({
      operationTime: event.target.value,
    });
  pliersChange = event =>
    this.setState({
      pliers: event.target.value,
    });
  sutureTypeChange = event =>
    this.setState({
      sutureType: event.target.value,
    });
  sutureMaterialChange = event =>
    this.setState({
      sutureMaterial: event.target.value,
    });
  sutureSizeChange = event =>
    this.setState({
      sutureSize: event.target.value,
    });
  elevatorsChange = event =>
    this.setState({
      elevators: event.target.value,
    });
  durationChange = event =>
    this.setState({
      duration: event.target.value,
    });
  surgeonChange = event =>
    this.setState({
      surgeon: event.target.value,
    });
  assistantChange = event =>
    this.setState({
      assistant: event.target.value,
    });
  anesthetistChange = event =>
    this.setState({
      anesthetist: event.target.value,
    });
  daysAmountChange = event =>
    this.setState({
      daysAmount: event.target.value,
    });
  recommendationsChange = event =>
    this.setState({
      recommendations: event.target.value,
    });
  hbChange = event =>
    this.setState({
      hb: event.target.value,
    });
  erChange = event =>
    this.setState({
      er: event.target.value,
    });
  leuChange = event =>
    this.setState({
      leu: event.target.value,
    });
  palChange = event =>
    this.setState({
      pal: event.target.value,
    });
  segmChange = event =>
    this.setState({
      segm: event.target.value,
    });
  eozChange = event =>
    this.setState({
      eoz: event.target.value,
    });
  limfChange = event =>
    this.setState({
      limf: event.target.value,
    });
  rseChange = event =>
    this.setState({
      rse: event.target.value,
    });
  glucoseChange = event =>
    this.setState({
      glucose: event.target.value,
    });
  enterobiozChange = event =>
    this.setState({
      enterobioz: event.target.value,
    });
  dungChange = event =>
    this.setState({
      dung: event.target.value,
    });
  uColorChange = event =>
    this.setState({
      uColor: event.target.value,
    });
  uOpacityChange = event =>
    this.setState({
      uOpacity: event.target.value,
    });
  uWeightChange = event =>
    this.setState({
      uWeight: event.target.value,
    });
  uPhChange = event =>
    this.setState({
      uPh: event.target.value,
    });
  uProteinChange = event =>
    this.setState({
      uProtein: event.target.value,
    });
  uLeuChange = event =>
    this.setState({
      uLeu: event.target.value,
    });
  uEp1Change = event =>
    this.setState({
      uEp1: event.target.value,
    });
  uEp2Change = event =>
    this.setState({
      uEp2: event.target.value,
    });

  complaintsFixChange = event =>
    this.setState({
      complaintsFix: event.target.value,
    });

  anamnesisMorbiFixChange = event =>
    this.setState({
      anamnesisMorbiFix: event.target.value,
    });

  anamnesisVitaeFixChange = event =>
    this.setState({
      anamnesisVitaeFix: event.target.value,
    });

  statusPraesensFixChange = event =>
    this.setState({
      statusPraesensFix: event.target.value,
    });

  statusLocalisFixChange = event =>
    this.setState({
      statusLocalisFix: event.target.value,
    });

  diagnosisFixChange = event =>
    this.setState({
      diagnosisFix: event.target.value,
    });

  operationContentFixChange = event =>
    this.setState({
      operationContentFix: event.target.value,
    });

  allFixHC() {
    this.setState({
      complaints: this.state.complaintsFix,
      anamnesisMorbi: this.state.anamnesisMorbiFix,
      anamnesisVitae: this.state.anamnesisVitaeFix,
      statusPraesens: this.state.statusPraesensFix,
      statusLocalis: this.state.statusLocalisFix,
      diagnosis: this.state.diagnosisFix,
      operationContent: this.state.operationContentFix,
      showManualPanel: !this.state.showManualPanel,
      showMP1: false,
      showMP2: false,
      showMP3: false,
      showMP4: false,
      showMP5: false,
      showMP6: false,
      showMP7: false
    });
  }

  showContentHC = () =>
    this.setState({
      showAllContent: true, showForm: false, showCheckLine: true,
      complaints: this.complaintsCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide),
      complaintsFix: this.complaintsCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide),
      anamnesisMorbi: this.anamnesisMorbiCreator(this.state.type, this.state.tooth, this.state.start1, this.state.start2, this.state.injuryDate, this.state.injuryTime, this.state.injuryReason),
      anamnesisMorbiFix: this.anamnesisMorbiCreator(this.state.type, this.state.tooth, this.state.start1, this.state.start2, this.state.injuryDate, this.state.injuryTime, this.state.injuryReason),
      anamnesisVitae: this.anamnesisVitaeCreator(this.state.pregnancy, this.state.childbirth, this.state.birthWeight),
      anamnesisVitaeFix: this.anamnesisVitaeCreator(this.state.pregnancy, this.state.childbirth, this.state.birthWeight),
      statusPraesens: this.statusPraesensCreator(this.state.generalCondition, this.state.age),
      statusPraesensFix: this.statusPraesensCreator(this.state.generalCondition, this.state.age),
      sowing: this.sowingChecker(this.state.age),
      statusLocalis: this.statusLocalisCreator(this.state.type, this.state.tooth, this.state.area, this.state.age, this.state.crownDestruction, this.state.woundSide, this.state.woundArea, this.state.woundType,
        this.state.woundLength, this.state.woundWidth, this.state.woundDepth, this.state.woundForm,
        this.state.woundLedges, this.state.woundBleeding, this.state.woundAliens),
      statusLocalisFix: this.statusLocalisCreator(this.state.type, this.state.tooth, this.state.area, this.state.age, this.state.crownDestruction, this.state.woundSide, this.state.woundArea, this.state.woundType,
        this.state.woundLength, this.state.woundWidth, this.state.woundDepth, this.state.woundForm,
        this.state.woundLedges, this.state.woundBleeding, this.state.woundAliens),
      diagnosis: this.diagnosisCreator(this.state.type, this.state.tooth, this.state.woundType, this.state.woundArea, this.state.woundSide),
      diagnosisFix: this.diagnosisCreator(this.state.type, this.state.tooth, this.state.woundType, this.state.woundArea, this.state.woundSide),
      operation: this.operationCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide),
      drug1Content: this.treatmentCreator(this.state.drugName1, this.state.age, this.state.weight),
      drug1: this.drug1Checker(this.state.drugName1),
      drug2Content: this.treatmentCreator(this.state.drugName2, this.state.age, this.state.weight),
      drug2: this.drug2Checker(this.state.drugName2),
      drug3Content: this.treatmentCreator(this.state.drugName3, this.state.age, this.state.weight),
      drug3: this.drug3Checker(this.state.drugName3),
      drug4Content: this.treatmentCreator(this.state.drugName4, this.state.age, this.state.weight),
      drug4: this.drug4Checker(this.state.drugName4),
      drug5Content: this.treatmentCreator(this.state.drugName5, this.state.age, this.state.weight),
      drug5: this.drug5Checker(this.state.drugName5),
      drug6Content: this.state.drugName6,
      drug6: this.drug6Checker(this.state.drugName6),
      operationCap: this.operationCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide)[0].toUpperCase() + this.operationCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide).slice(1),
      diagnosisCap: this.diagnosisCreator(this.state.type, this.state.tooth, this.state.woundType, this.state.woundArea, this.state.woundSide)[0].toUpperCase() + this.diagnosisCreator(this.state.type, this.state.tooth, this.state.woundType, this.state.woundArea, this.state.woundSide).slice(1),
      operationContent: this.operationContentCreator(this.state.type, this.state.area, this.state.tooth, this.state.pliers, this.state.elevators,
        this.state.sutureType, this.state.sutureMaterial, this.state.sutureSize),
      operationContentFix: this.operationContentCreator(this.state.type, this.state.area, this.state.tooth, this.state.pliers, this.state.elevators,
        this.state.sutureType, this.state.sutureMaterial, this.state.sutureSize),
      lastTime: this.lastTimeChecker(this.state.operationTime),
      lastDate: this.lastDateChecker(this.state.operationTime, this.fullDate, this.fullDate2),
      recommendations: this.recommendationsCreator(this.state.type)
    });
  instantPrintHC = () =>
    this.setState({
      showAllContent: false, showForm: false,
      complaints: this.complaintsCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide),
      complaintsFix: this.complaintsCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide),
      anamnesisMorbi: this.anamnesisMorbiCreator(this.state.type, this.state.tooth, this.state.start1, this.state.start2, this.state.injuryDate, this.state.injuryTime, this.state.injuryReason),
      anamnesisMorbiFix: this.anamnesisMorbiCreator(this.state.type, this.state.tooth, this.state.start1, this.state.start2, this.state.injuryDate, this.state.injuryTime, this.state.injuryReason),
      anamnesisVitae: this.anamnesisVitaeCreator(this.state.pregnancy, this.state.childbirth, this.state.birthWeight),
      anamnesisVitaeFix: this.anamnesisVitaeCreator(this.state.pregnancy, this.state.childbirth, this.state.birthWeight),
      statusPraesens: this.statusPraesensCreator(this.state.generalCondition, this.state.age),
      statusPraesensFix: this.statusPraesensCreator(this.state.generalCondition, this.state.age),
      sowing: this.sowingChecker(this.state.age),
      statusLocalis: this.statusLocalisCreator(this.state.type, this.state.tooth, this.state.area, this.state.age, this.state.crownDestruction, this.state.woundSide, this.state.woundArea, this.state.woundType,
        this.state.woundLength, this.state.woundWidth, this.state.woundDepth, this.state.woundForm,
        this.state.woundLedges, this.state.woundBleeding, this.state.woundAliens),
      statusLocalisFix: this.statusLocalisCreator(this.state.type, this.state.tooth, this.state.area, this.state.age, this.state.crownDestruction, this.state.woundSide, this.state.woundArea, this.state.woundType,
        this.state.woundLength, this.state.woundWidth, this.state.woundDepth, this.state.woundForm,
        this.state.woundLedges, this.state.woundBleeding, this.state.woundAliens),
      diagnosis: this.diagnosisCreator(this.state.type, this.state.tooth, this.state.woundType, this.state.woundArea, this.state.woundSide),
      diagnosisFix: this.diagnosisCreator(this.state.type, this.state.tooth, this.state.woundType, this.state.woundArea, this.state.woundSide),
      operation: this.operationCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide),
      drug1Content: this.treatmentCreator(this.state.drugName1, this.state.age, this.state.weight),
      drug1: this.drug1Checker(this.state.drugName1),
      drug2Content: this.treatmentCreator(this.state.drugName2, this.state.age, this.state.weight),
      drug2: this.drug2Checker(this.state.drugName2),
      drug3Content: this.treatmentCreator(this.state.drugName3, this.state.age, this.state.weight),
      drug3: this.drug3Checker(this.state.drugName3),
      operationCap: this.operationCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide)[0].toUpperCase() + this.operationCreator(this.state.type, this.state.tooth, this.state.woundArea, this.state.woundSide).slice(1),
      diagnosisCap: this.diagnosisCreator(this.state.type, this.state.tooth, this.state.woundType, this.state.woundArea, this.state.woundSide)[0].toUpperCase() + this.diagnosisCreator(this.state.type, this.state.tooth, this.state.woundType, this.state.woundArea, this.state.woundSide).slice(1),
      operationContent: this.operationContentCreator(this.state.type, this.state.area, this.state.tooth, this.state.pliers, this.state.elevators,
        this.state.sutureType, this.state.sutureMaterial, this.state.sutureSize),
      operationContentFix: this.operationContentCreator(this.state.type, this.state.area, this.state.tooth, this.state.pliers, this.state.elevators,
        this.state.sutureType, this.state.sutureMaterial, this.state.sutureSize),
      lastTime: this.lastTimeChecker(this.state.operationTime),
      lastDate: this.lastDateChecker(this.state.operationTime, this.fullDate, this.fullDate2),

    });

  hideFormHC = () =>
    this.setState({
      showForm: false,
      showCheckLine: false
    });

  showFormHC = () =>
    this.setState({ showForm: true });

  showEpicrisisHC = () =>
    this.setState({ showEpicrisis: true,
      showEpicrisisBtn: false  });

  showMainFormHC = () => {
    this.setState({
      showMainForm: true,
      showCheckLine: false
    })
    if (this.state.type == 'periostit' || this.state.type == 'periodontit') {
      this.setState({ showPerioLines: true });
    }
    else if (this.state.type == 'skinWound') {
      this.setState({ showSkinWoundLines: true });
    }
  }

  toggleManualPanelHC = () =>
    this.setState({ showManualPanel: !this.state.showManualPanel });

  toggleUrineHC = () =>
    this.setState({ showUrine: !this.state.showUrine });

  toggleMP1HC = () =>
    this.setState({ showMP1: !this.state.showMP1 });

  toggleMP2HC = () =>
    this.setState({ showMP2: !this.state.showMP2 });

  toggleMP3HC = () =>
    this.setState({ showMP3: !this.state.showMP3 });

  toggleMP4HC = () =>
    this.setState({ showMP4: !this.state.showMP4 });

  toggleMP5HC = () =>
    this.setState({ showMP5: !this.state.showMP5 });

  toggleMP6HC = () =>
    this.setState({ showMP6: !this.state.showMP6 });

  toggleMP7HC = () =>
    this.setState({
      showMP7: !this.state.showMP7,
    });


  date = new Date();
  day = this.date.getDate();
  day0 = this.day - 1;
  day2 = this.day + 1;
  month = this.date.getMonth() + 1;
  year = this.date.getFullYear();
  fullDate = this.day + '.' + this.month + '.' + this.year
  fullDate0 = this.day0 + '.' + this.month + '.' + this.year
  fullDate2 = this.day2 + '.' + this.month + '.' + this.year
  btnStart = { color: 'btn btn-outline-secondary', name: 'Зберегти' }
  btnSaved = { color: 'btn btn-secondary', name: 'Збережено' }

  complaintsCreator(type, tooth, woundArea, woundSide) {
    if (type == "periostit") {
      switch (Number(tooth)) {
        case 54: case 55: case 14: case 15: case 16: case 17: case 18: return ("наявність болючої припухлості в ділянці щоки праворуч, загальне знедужання, підвищення температури тіла.");
          break;
        case 64: case 65: case 24: case 25: case 26: case 27: case 28: return ("наявність болючої припухлості в ділянці щоки ліворуч, загальне знедужання, підвищення температури тіла.");
          break;
        case 74: case 75: case 34: case 35: case 36: case 37: case 38: return ("наявність болючої припухлості в ділянці щоки ліворуч, загальне знедужання, підвищення температури тіла.");
          break;
        case 84: case 85: case 44: case 45: case 46: case 47: case 48: return ("наявність болючої припухлості в ділянці щоки праворуч, загальне знедужання, підвищення температури тіла.");
          break;
        case 51: case 52: case 53: case 11: case 12: case 13: return ("наявність болючої припухлості верхньої праворуч, загальне знедужання, підвищення температури тіла.");
          break;
        case 61: case 62: case 63: case 21: case 22: case 23: return ("наявність болючої припухлості в ділянці верхньої губи ліворуч, загальне знедужання, підвищення температури тіла.");
          break;
        case 71: case 72: case 73: case 31: case 32: case 32: return ("наявність болючої припухлості в ділянці нижньої губи ліворуч, загальне знедужання, підвищення температури тіла.");
          break;
        case 81: case 82: case 83: case 41: case 42: case 43: return ("наявність болючої припухлості в ділянці нижньої губи праворуч, загальне знедужання, підвищення температури тіла.");
          break;
        default: return "наявність болючої припухлості обличчя, загальне знедужання, підвищення температури тіла."
      }
    }
    else if (type == "periodontit") {
      switch (Number(tooth)) {
        case 54: case 55: case 14: case 15: case 16: case 17: case 18: return (" на незначну припухлість щоки праворуч, біль у правому верхньому кутньому зубі, особливо виражений при накушуванні.");
          break;
        case 64: case 65: case 24: case 25: case 26: case 27: case 28: return (" на незначну припухлість щоки ліворуч, біль у лівому верхньому кутньому зубі, особливо виражений при накушуванні.");
          break;
        case 74: case 75: case 34: case 35: case 36: case 37: case 38: return (" на незначну припухлість щоки ліворуч, біль у лівому нижньому кутньому зубі, особливо виражений при накушуванні.");
          break;
        case 84: case 85: case 44: case 45: case 46: case 47: case 48: return (" на незначну припухлість щоки праворуч, біль у правому нижньому кутньому зубі, особливо виражений при накушуванні.");
          break;
        case 51: case 52: case 53: case 11: case 12: case 13: return (" на незначну припухлість верхньої губи праворуч, біль у правому верхньому центральному зубі, особливо виражений при накушуванні.");
          break;
        case 61: case 62: case 63: case 21: case 22: case 23: return (" на незначну припухлість верхньої губи ліворуч, біль у лівому верхньому центральному зубі, особливо виражений при накушуванні.");
          break;
        case 71: case 72: case 73: case 31: case 32: case 32: return (" на незначну припухлість нижньої губи ліворуч, біль у лівому нижньому центральному зубі, особливо виражений при накушуванні.");
          break;
        case 81: case 82: case 83: case 41: case 42: case 43: return (" на незначну припухлість нижньої губи праворуч, біль у правому нижньому центральному зубі, особливо виражений при накушуванні.");
          break;
        default: return (" на незначну припухлість обличчя, біль у зубі, особливо виражений при накушуванні.");
      }
    }
    else if (type == "skinWound") {
      switch (woundArea) {
        case 'підщелепної ділянки': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'підборідної ділянки': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'щічної ділянки': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'нижньої губи': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'верхньої губи': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'підочної ділянки': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'привушно-жувальної ділянки': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'виличної ділянки': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'скроневої ділянки': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        case 'лобної ділянки': return ("наявність рани " + woundArea + " " + woundSide + ".");
          break;
        default: return "наявність рани обличчя."
      }
    }
  }
  anamnesisMorbiCreator(type, tooth, start1, start2, injuryDate, injuryTime, injuryReason) {
    if (type == "periostit") {
      switch (Number(tooth)) {
        case 54: case 55: case 14: case 15: case 16: case 17: case 18: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у правому верхньому кутньому зубі.");
          break;
        case 64: case 65: case 24: case 25: case 26: case 27: case 28: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у лівому верхньому кутньому зубі.");
          break;
        case 74: case 75: case 34: case 35: case 36: case 37: case 38: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у лівому нижньому кутньому зубі.");
          break;
        case 84: case 85: case 44: case 45: case 46: case 47: case 48: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у правому нижньому кутньому зубі.");
          break;
        case 51: case 52: case 53: case 11: case 12: case 13: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у правому верхньому центральному  зубі.");
          break;
        case 61: case 62: case 63: case 21: case 22: case 23: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у лівому верхньому центральному зубі.");
          break;
        case 71: case 72: case 73: case 31: case 32: case 32: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у лівому нижньому центральому зубі.");
          break;
        case 81: case 82: case 83: case 41: case 42: case 43: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у правому нижньому центральному зубі.");
          break;
        default: return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Захворювання почалось із болі у зубі.")
      }
    }
    else if (type == "periodontit") {
      return ("зі слів батьків, хворіє " + start1 + "-й " + start2 + ". Схожі скарги тривають протягом останнього року. Амбулаторно видалення причинного зуба не було проведено через емоційну нестабільність дитини.");
    }
    else if (type == "skinWound") {
      return ("зі слів батьків, травма відбулась " + injuryDate + " приблизно о " + injuryTime + ", в результаті " + injuryReason + ".");
    }
  }
  anamnesisVitaeCreator(pregnancy, childbirth, birthWeight) {
    return ("дитина від " + pregnancy + "-ої вагітності, пологи " + childbirth + "-і, вага при народженні " + birthWeight + "г. У психомоторному розвитку від однолітків не відстає. Перенесені дитячі інфекційні захворювання (вітряна віспа, кір, скарлатина, кашлюк, епід.паротит, гепатит A,B,C,D), зі слів батьків, заперечують. Профілактичні щеплення, зі слів батьків, проведені не в повному обсязі. Алергологічний анамнез не обтяжений. Спадковий анамнез не обтяжений. Останні 21 день в контакті з інфекційними хворими не перебувала; розладів стільця у дитини та членів сім'ї не спостерігалося. ")
  }
  statusPraesensCreator(generalCondition, age) {
    return ("загальний стан дитини " + generalCondition + ". Свідомість ясна. Поведінка адекватна. Положення активне. Живлення звичайне. Шкірні покриви чисті. Шкіра помірної вологості. Щитоподібна залоза не збільшена. Серце: межі відносної та абсолютної тупості відповідають нормі. ЧСС=" + this.heartRateCounter(age) + "/хв. Над легенями перкуторно ясний легеневий звук. Везикулярне дихання. ЧДР=" + this.respiratoryRateCounter(age) + "/хв. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Випорожнення оформлені, без патологічних домішок, раз на день. Сечопуск вільний, регулярний, безболісний.")
  }
  statusLocalisCreator(type, tooth, area, age, crownDestruction, woundSide, woundArea, woundType, woundLength, woundWidth, woundDepth, woundForm, woundLedges, woundBleeding, woundAliens) {
    //  return ("обличчя  асиметричне (за рахунок колатерального  набряку верхньої третини щічної ділянки  та підочної ділянки праворуч). Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.bite + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + this.area + " зубів, випукла, різко болісна при пальпації. Коронка " + this.toothNumber + " зуба " + this.crownDestruction + " зруйнована карієсом, перкусія його різко болісна.") ,
    if (type == "periostit") {
      switch (Number(tooth)) {
        case 54: case 55: case 14: case 15: case 16: case 17: case 18: return ("обличчя  асиметричне за рахунок колатерального  набряку верхньої третини щічної ділянки та підочної ділянки праворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + area + " зубів, випукла, різко болісна при пальпації. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 64: case 65: case 24: case 25: case 26: case 27: case 28: return ("обличчя  асиметричне за рахунок колатерального  набряку верхньої третини щічної ділянки та підочної ділянки ліворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + area + " зубів, випукла, різко болісна при пальпації. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 74: case 75: case 34: case 35: case 36: case 37: case 38: return ("обличчя  асиметричне за рахунок колатерального  набряку нижньої третини щічної ділянки ліворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + area + " зубів, випукла, різко болісна при пальпації. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 84: case 85: case 44: case 45: case 46: case 47: case 48: return ("обличчя  асиметричне за рахунок колатерального  набряку нижньої третини щічної ділянки праворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + area + " зубів, випукла, різко болісна при пальпації. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 51: case 52: case 53: case 11: case 12: case 13: return ("обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин верхньої губи праворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + area + " зубів, випукла, різко болісна при пальпації. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 61: case 62: case 63: case 21: case 22: case 23: return ("обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин верхньої губи ліворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + area + " зубів, випукла, різко болісна при пальпації. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 71: case 72: case 73: case 31: case 32: case 32: return ("обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин нижньої губи ліворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + area + " зубів, випукла, різко болісна при пальпації. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 81: case 82: case 83: case 41: case 42: case 43: case 44: return ("обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин нижньої губи праворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки " + area + " зубів, випукла, різко болісна при пальпації. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        default: return "наявність болючої припухлості обличчя, загальне знедужання, підвищення температури тіла."
      }
    }
    else if (type == "periodontit") {
      switch (Number(tooth)) {
        case 54: case 55: case 14: case 15: case 16: case 17: case 18: return ("обличчя  дещо асиметричне за рахунок невираженого колатерального набряку верхньої третини щічної та підочної ділянок праворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 64: case 65: case 24: case 25: case 26: case 27: case 28: return ("обличчя  дещо асиметричне за рахунок невираженого колатерального набряку верхньої третини щічної та підочної ділянок ліворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 74: case 75: case 34: case 35: case 36: case 37: case 38: return ("обличчя  дещо асиметричне за рахунок невираженого колатерального набряку нижньої третини щічної ділянки ліворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 84: case 85: case 44: case 45: case 46: case 47: case 48: return ("обличчя  дещо асиметричне за рахунок невираженого колатерального набряку нижньої третини щічної ділянки праворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 51: case 52: case 53: case 11: case 12: case 13: return ("обличчя  дещо асиметричне за рахунок невираженого колатерального набряку верхньої губи праворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 61: case 62: case 63: case 21: case 22: case 23: return ("обличчя  дещо асиметричне за рахунок невираженого колатерального набряку верхньої губи ліворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 71: case 72: case 73: case 31: case 32: case 32: return ("обличчя  дещо асиметричне за рахунок невираженого колатерального набряку нижньої губи ліворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        case 81: case 82: case 83: case 41: case 42: case 43: return ("обличчя  дещо асиметричне за рахунок невираженого колатерального набряку нижньої губи праворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
          break;
        default: return ("обличчя симетричне. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. " + this.biteChecker(age) + " прикус.  Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці " + tooth + " зуба. Коронка " + tooth + " зуба " + crownDestruction + " зруйнована карієсом, перкусія його різко болісна.");
      }
    }
    else if (type == "skinWound") {
      return ("обличчя симетричне. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. Слизова оболонка ротової порожнини блідо-рожева, без видимих патологічних змін. При огляді " + woundArea + woundSide + " виявлена " + woundType + " рана " + woundForm + ", розмірами приблизно " + woundLength + "*" + woundWidth + "*" + woundDepth + " см, зі сторони шкірних покривів. Краї рани " + woundLedges + ". Кровоточивість з рани " + woundBleeding + ". " + woundAliens + ".")
    }
  }
  diagnosisCreator(type, tooth, woundType, woundArea, woundSide) {
    if (type == "periostit") {
      switch (Number(tooth)) {
        case 54: case 55: case 14: case 15: case 16: case 17: case 18:
        case 51: case 52: case 53: case 11: case 12: case 13: return ("гострий гнійний одонтогенний періостит верхньої щелепи праворуч від R" + tooth + " зуба.")
          break;
        case 64: case 65: case 24: case 25: case 26: case 27: case 28:
        case 61: case 62: case 63: case 21: case 22: case 23: return ("гострий гнійний одонтогенний періостит верхньої щелепи ліворуч від R" + tooth + " зуба.")
          break;
        case 74: case 75: case 34: case 35: case 36: case 37: case 38:
        case 71: case 72: case 73: case 31: case 32: case 32: return ("гострий гнійний одонтогенний періостит нижньої щелепи ліворуч від R" + tooth + " зуба.")
          break;
        case 84: case 85: case 44: case 45: case 46: case 47: case 48:
        case 81: case 82: case 83: case 41: case 42: case 43: case 44: return ("гострий гнійний одонтогенний періостит нижньої щелепи праворуч від R" + tooth + " зуба.")
          break;
        default: return ("гострий гнійний одонтогенний періостит верхньої щелепи праворуч ")
      }
    }
    else if (type == "periodontit") {
      return ("загострення хронічного періодонтиту R" + tooth + " зуба.")
    }
    else if (type == "skinWound") {
      return (woundType + " рана " + woundArea + "" + woundSide + ".")
    }
  }
  operationCreator(type, tooth, woundArea, woundSide) {
    if (type == "periostit") {
      switch (Number(tooth)) {
        case 54: case 55: case 14: case 15: case 16: case 17: case 18:
        case 51: case 52: case 53: case 11: case 12: case 13: return ("розкриття та дренування субперіостального абсцесу верхньої щелепи праворуч.")
          break;
        case 64: case 65: case 24: case 25: case 26: case 27: case 28:
        case 61: case 62: case 63: case 21: case 22: case 23: return ("розкриття та дренування субперіостального абсцесу верхньої щелепи ліворуч.")
          break;
        case 74: case 75: case 34: case 35: case 36: case 37: case 38:
        case 71: case 72: case 73: case 31: case 32: case 32: return ("розкриття та дренування субперіостального абсцесу нижньої щелепи ліворуч.")
          break;
        case 84: case 85: case 44: case 45: case 46: case 47: case 48:
        case 81: case 82: case 83: case 41: case 42: case 43: case 44: return ("розкриття та дренуванння субперіостального абсцесу верхньої щелепи ліворуч.")
          break;
        default: return ("розкриття та дренуванння субперіостального абсцесу")
      }
    }
    else if (type == "periodontit") {
      return ("видалення " + tooth + " зуба.")
    }
    else if (type == "skinWound") {
      return ("ПХО рани " + woundArea + "" + woundSide + ".")
    }
  }
  treatmentCreator(drugName, age, weight) {
    if (drugName == "amoxyclav") {
      return this.amoxyclavCounter(weight)
    }
    else if (drugName == "lincomycin") {
      return this.lincomycinCounter(weight)
    }
    else if (drugName == "sumamed") {
      return this.sumamedCounter(weight)
    }
    else if (drugName == "cefodox") {
      return this.cefodoxCounter(weight)
    }
    else if (drugName == "loprax") {
      return this.lopraxCounter(weight)
    }
    else if (drugName == "ceftriaxon") {
      return this.ceftriaxonCounter(weight)
    }
    else if (drugName == "cefotaxim") {
      return this.cefotaximCounter(weight)
    }
    else if (drugName == "amicyl") {
      return this.amicylCounter(weight)
    }
    else if (drugName == "nurofen") {
      return this.nurofenCounter(age)
    }
    else if (drugName == "paracetamol") {
      return this.paracetamolCounter(age)
    }
    else if (drugName == "neoflorum") {
      return this.neoflorumCounter(age)
    }
    else if (drugName == "probiz") {
      return this.probizCounter(age)
    }
    else if (drugName == "loratadyn") {
      return this.loratadynCounter(weight)
    }
    else if (drugName == "fenistyl") {
      return this.fenistylCounter(weight)
    }
    else if (drugName == "metrogil") {
      return this.metrogilCounter(weight)
    }
    else if (drugName == "soda") {
      return this.sodaCounter()
    }
  }
  operationContentCreator(type, area, tooth, pliers, elevators, sutureType, sutureMaterial, sutureSize) {
    if (type == "periostit") {
      return ("Загальне знеболення. Обробка приротової ділянки спиртом двічі, в роті - 3% розчином перекисю водню. Проведено розріз до кістки паралельно до перехідної складки в ділянці " + area + " зубів, довжиною приблизно 2 см. Тупо москітним затискачем розширено краї рани, та пройдено до гнійного осередку. Гнійний вміст об’ємом приблизно 2 мл забрано на бак.посів. Рана дренована гумовим випускником. Видалено " + tooth + " зуб з допомогою " + pliers + elevators + ". На верхівках коренів видаленого зуба виявлені множинні дрібні гранульоми. Гемостаз по ходу операції. Дитина переведена в палату зі задовільними показниками гемодинаміки.")
    }
    else if (type == "periodontit") {
      return ("Загальне знеболення. Обробка приротової ділянки спиртом двічі, в роті - 3% розчином перекисю водню. Видалено " + tooth + " зуб з допомогою " + pliers + elevators + ". На верхівках коренів видаленого зуба виявлені множинні дрібні гранульоми. Гемостаз по ходу операції. Дитина переведена в палату зі задовільними показниками гемодинаміки.")
    }
    else if (type == "skinWound") {
      return ("Загальне знеболення. Обробка операційного поля спиртом двічі. Ревізія рани. Медикаментозна обробка розчинами декасану та перекисю водню(3%). Краї рани співставлено та ушито " + sutureType + ", використовуючи матеріал '" + sutureMaterial + sutureSize + "'. Поверхня рани оброблена спиртом. Суха асептича пов'язка. Гемостаз по ходу операції. Дитина переведена в палату зі задовільними показниками гемодинаміки.")
    }

  }
  recommendationsCreator(type) {
    if (type == "periostit" || type == "periodontit") {
      return (" санація порожнини рота по місцю проживання.")
    }
    else if (type == "skinWound") {
      return (" контрольний огляд та зняття швів через 5-7 днів.")
    }
  }

  loratadynCounter(weight) {
    if (weight < 30) {
      return "Лоратадин, сироп, по 5 мл, 1 р/д"
    }
    else return "Лоратадин, сироп, по 10 мл, 1 р/д"
  }

  sodaCounter() { 
  return "Ротові ваночки з содовим розчином, по 1хв., 4 р/д"
  }

  fenistylCounter(weight) {
    let result = weight * 2 / 3;
    return "Феністил, по " + result.toFixed(0) + " кап., 3 р/д";
  }
  lincomycinCounter(weight) {
    let kilo = Number(weight)
    let dose = 0
    if (kilo < 41 && kilo > 0) {
      dose = kilo / 20;
      return "Лінкоміцину гідрохлорид(30%), по " + dose.toFixed(1) + " мл в/м'язово, 2 р/д";
    }
    else {
      dose = kilo / 30;
      return "Лінкоміцину гідрохлорид(30%), по " + dose.toFixed(1) + " мл в/м'язово, 3 р/д";
    }
  }
  amoxyclavCounter(weight) {
    let dose = weight / 6
    if (weight < 40) {
      return "Амоксиклав(250/62.5мг), по " + dose.toFixed() + " мл, 3 р/д"
    }
    else return "Амоксиклав(500/125мг), таблетки, по 1 таб., 2 р/д"
  }
  sumamedCounter(weight) {
    let dose = 0;
    if (weight < 16) {
      dose = weight / 2;
      return " Сумамед(100мг/5мл), по " + dose.toFixed(1) + " мл, 1 р/д";
    }
    else if (weight < 45) {
      dose = weight / 4;
      return " Сумамед(200мг/5мл), по " + dose.toFixed(1) + " мл, 1 р/д";
    }
    else {
      return " Сумамед(500мг), по 1таб., 1 р/д";
    }
  }
  cefodoxCounter(weight) {
    let dose = 0;
    if (weight < 21) {
      dose = weight / 2;
      return "Цефодокс(50мг/5мл), по " + dose.toFixed(1) + " мл, 2 р/д";
    }
    else if (weight < 41) {
      dose = weight / 4;
      return "Цефодокс(100мг/5мл), по " + dose.toFixed(1) + " мл, 2 р/д";
    }
    else {
      return " Цефодокс(200мг), по 1таб., 2 р/д";
    }
  }
  lopraxCounter(weight) {
    let dose = 0;
    if (weight < 41) {
      dose = weight / 5;
      return "Лопракс(100мг/5мл), по " + dose.toFixed(1) + " мл, 2 р/д";
    }
    else {
      return " Лопракс(400мг), по 1таб., 1 р/д";
    }
  }
  ceftriaxonCounter(weight) {
    let kilo = Number(weight)
    let dose = 0
    if (kilo < 21) {
      dose = kilo / 20;
      return "Цефтріаксон, по " + dose.toFixed(1) + " г, в/венно, 2 р/д";
    }
    else if (kilo < 51) {

      return "Цефтріаксон, по 1,0 г, в/венно, 2 р/д";
    }
    else {
      return "Цефтріаксон, по 1,0 г, в/венно, 3 р/д";
    }
  }
  cefotaximCounter(weight) {
    let kilo = Number(weight)
    let dose = 0
    if (kilo < 21) {
      dose = kilo / 20;
      return "Цефотаксим, по " + dose.toFixed(1) + " г, в/венно, 2 р/д";
    }
    else if (kilo < 51) {

      return "Цефотаксим, по 1,0 г, в/венно, 2 р/д";
    }
    else {
      return "Цефотаксим, по 1,0 г, в/венно, 3 р/д";
    }
  }
  amicylCounter(weight) {
    let dose = weight * 15 / 2
    if (weight < 34) {
      return "Аміцил(250мг), по " + dose.toFixed(0) + " мг, в/венно, 2 р/д";
    }
    else if (weight < 67) {
      return "Аміцил(500мг), по " + dose.toFixed(0) + " мг, в/венно, 2 р/д";
    }
    else {
      return "Аміцил(1000мг), по " + dose.toFixed(0) + " мг, в/венно, 2 р/д";
    }
  }
  nurofenCounter(age) {
    if (age < 1) {
      return "Нурофен, сироп, по 2,5мл, 3 р./д."
    } else if (age < 4) {
      return "Нурофен, сироп, по 5мл, 3 р./д."
    }
    else if (age < 7) {
      return "Нурофен, сироп, по 7,5мл, 3 р./д."
    }
    else if (age < 10) {
      return "Нурофен, сироп, по 10мл, 3 р./д."
    }
    else if (age < 14) {
      return "Ібупрофен(200мг), таблетки, по 1 таб., 3 р./д."
    }
    else return "Ібупрофен(400мг), таблетки, по 1 таб., 3 р./д."
  }
  paracetamolCounter(age) {
    if (age < 1) {
      return "Панадол, сироп, по 5мл, 3 р./д."
    } else if (age < 4) {
      return "Панадол, сироп, по 7,5мл, 3 р./д."
    }
    else if (age < 7) {
      return "Панадол, сироп, по 10мл, 3 р./д."
    }
    else if (age < 10) {
      return "Парацетамол(250мг), по 1 таб.,3 р./д."
    }
    else if (age < 12) {
      return "Парацетамол(250мг), по 1 таб., 4 р./д."
    }
    else return "Парацетамол(500мг),по 1 таб., 3 р./д."
  }
  neoflorumCounter(age) {
    if (age < 6) {
      return "Лактомун, по 1 порошку, 1 р./д."
    }
    else if (age < 12) {
      return "Неофлорум, по 1 капсулі, 1 р./д."
    } else {
      return "Неофлорум, по 1 капсулі, 2 р./д."
    }
  }
  probizCounter(age) {
    if (age < 6) {
      return "Пробіз кідс, по 1 міні-флакону, 1 р./д."
    }
    else if (age < 12) {
      return "Пробіз, по 1 капсулі, 1 р./д."
    } else {
      return "Пробіз, по 1 капсулі, 2 р./д."
    }
  }
  metrogilCounter(weight) {
    let dose = weight * 3 / 2
    if (weight < 67) {
      return "Метрогіл, по " + dose.toFixed(0) + " мл, в/венно, 3 р/д";
    }
    else {
      return "Метрогіл, по 100 мл, в/венно, 3 р/д";
    }
  }
  heartRateCounter(age) {
    switch (Number(age)) {
      case 0: return 130;
        break;
      case 1: return 115;
        break;
      case 2: case 3: return 110;
        break;
      case 4: case 5: return 100;
        break;
      case 6: case 7: return 95;
        break;
      case 8: case 9: return 85;
        break;
      case 10: case 11: return 80;
        break;
      case 12: case 13: case 14: return 70;
        break;
      default: return 65
    }
  }
  respiratoryRateCounter(age) {
    switch (Number(age)) {
      case 0: return 35;
        break;
      case 1: case 2: case 3: return 30;
        break;
      case 4: case 5: case 6: return 25;
        break;
      case 7: case 8: case 9: return 22;
        break;
      case 10: case 11: case 12: return 20;
        break;
      case 13: case 14: case 15: return 18;
        break;
      default: return 16
    }
  }
  endDateCounter(daysAmount, day, month, year) {
    let endDay = day + Number(daysAmount)
    let endMonth = month
    switch (month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if (endDay > 31) {
          endDay -= 31
          endMonth += 1
        }
        break;
      case 4: case 6: case 9: case 11:
        if (endDay > 30) {
          endDay -= 30
          endMonth += 1
        }
        break;
      case 2:
        if (endDay > 28) {
          endDay -= 28
          endMonth += 1
        }
        break;
    }
    let endDate = endDay + '.' + endMonth + '.' + year
    return endDate
  }

  colorIndexCounter(hb, er) {
    let hb1 = Number(hb)
    let er1 = Number(er)
    let colorIndex = (hb1 * 3) / (er1 * 100)
    return colorIndex.toFixed(2)
  }

  monoCounter(pal, segm, eoz, limf) {
    let pal1 = Number(pal)
    let segm1 = Number(segm)
    let eoz1 = Number(eoz)
    let limf1 = Number(limf)
    let sum = pal1 + segm1 + eoz1 + limf1
    let mono = 100 - sum
    return mono
  }

  biteChecker(age) {
    if (Number(age) < 6) {
      return ("Тимчасовий")
    }
    else if (Number(age) < 12) {
      return ("Змінний")
    }
    else {
      return ("Постійний")
    }
  }
  sowingChecker(age) {
    if (Number(age) < 4) {
      return true
    }
    else
      return false
  }
  drug1Checker(drugname) {
    if (drugname !== '') {
      return true
    }
    else
      return false
  }
  drug2Checker(drugname) {
    if (drugname !== '') {
      return true
    }
    else
      return false
  }
  drug3Checker(drugname) {
    if (drugname !== '') {
      return true
    }
    else
      return false
  }
  drug4Checker(drugname) {
    if (drugname !== '') {
      return true
    }
    else
      return false
  }
  drug5Checker(drugname) {
    if (drugname !== '') {
      return true
    }
    else
      return false
  }
  drug6Checker(drugname) {
    if (drugname !== '') {
      return true
    }
    else
      return false
  }
  lastTimeChecker(time) {
    let clean = Number(time).toFixed(0)
    let cleanTime = Number(clean)
    if (cleanTime < 22) {
      cleanTime += 2
      return (cleanTime + ".00")
    }
    else {
      return "01.00"
    }
  }
  lastDateChecker(time, fullDate, fullDate2) {
    let clean = Number(time).toFixed(0)
    let cleanTime = Number(clean)
    if (cleanTime < 22) {
      return fullDate
    }
    else {
      return fullDate2
    }
  }


  render() {
    return (<div id="fragment">
      {this.state.showAllContent &&
        <div className="allContent">
          <div className="row justify-content-center" id="date">
            <SpanBold>Дата: <SpanNormal> {this.fullDate}</SpanNormal></SpanBold>
          </div>
          <div className="row justify-content-center" id="mutual"><span className="font-weight-bold">Спільний огляд із зав.відділенням Корицьким В.Г.</span></div>
          <div className="row ">
            <div className="offset-2 col-5 " ><SpanBold id="cardNumber">№ історії хвороби: <SpanNormal>{this.state.cardNumber}</SpanNormal></SpanBold></div>
            <div className="col-5 justify-content-end" id="child"><SpanBold>Дитина: <SpanNormal> {this.state.patientName}</SpanNormal></SpanBold></div>
          </div>

          <div className="row justify-content-center" id="doctor">
            <SpanBold>Щелепно-лицевий хірург: <SpanNormal> {this.state.doctor}</SpanNormal></SpanBold>
          </div>
          <div className="container">
            <SpanBold>Скарги: <SpanNormal>{this.state.complaints}</SpanNormal></SpanBold>
          </div>
          <div className="container">
            <SpanBold>Анамнез захворювання: <SpanNormal> {this.state.anamnesisMorbi}</SpanNormal></SpanBold>
          </div>
          <div className="container">
            <SpanBold>Анамнез життя: <SpanNormal>{this.state.anamnesisVitae}</SpanNormal></SpanBold>
          </div>
          <div className="container">
            <SpanBold>Об'єктивний стан: <SpanNormal>{this.state.statusPraesens}</SpanNormal></SpanBold>
          </div>

          <div className="container">
            <SpanBold>Стан щелепно-лицевої ділянки: <SpanNormal>{this.state.statusLocalis}</SpanNormal></SpanBold>
          </div>
          <div className="container" id="diagnosis">
            <SpanBold>Діагноз: <SpanNormal>{this.state.diagnosis}</SpanNormal></SpanBold>
          </div>

          <div className="row " id="firstPageFooter">
            <div className=" col-6 " id="plan"><SpanBold>План обстеження: <SpanNormal> <ol>
              <li>Загальний аналіз крові</li>
              <li>Загальний аналіз сечі</li>
              <li>Глюкоза крові</li>
              <li>Кал на яйця глистів</li>
              <li>Зішкріб на ентеробіоз</li>
              {this.state.sowing && <li>Бак. посів калу</li>}
            </ol></SpanNormal></SpanBold></div>
            <div className="col-6 "><SpanBold>План лікування: <SpanNormal> <ol>
              <li>Режим палатний</li>
              <li>{this.state.table}</li>
              {this.state.drug1 && <li>{this.state.drug1Content}</li>}
              {this.state.drug2 && <li>{this.state.drug2Content}</li>}
              {this.state.drug3 && <li>{this.state.drug3Content}</li>}
              {this.state.drug4 && <li>{this.state.drug4Content}</li>}
              {this.state.drug5 && <li>{this.state.drug5Content}</li>}
              {this.state.drug6 && <li>{this.state.drug6Content}</li>}
            </ol></SpanNormal></SpanBold></div>
          </div>

          <div className="row justify-content-center" id="secondPageHeader"><span className="font-weight-bold">Показання до операції:</span></div>
          <div className="container" id="indication"><ol>
            <li>{this.state.diagnosisCap}</li>
            <li>{this.state.operationCap}</li>
            <li>Загальне знеболення.</li>
            <li>Згоду батьків до операції отримано.</li>
            <li>Протипоказань до операції немає.</li>
          </ol></div>
          <div className="row justify-content-center"><SpanBold>Протокол операції № <SpanNormal> {this.state.protocolNumber}</SpanNormal></SpanBold></div>
          <div className="row ">
            <div className="offset-3 col-4 "><SpanBold>Дата: <SpanNormal>{this.state.operationDate}</SpanNormal></SpanBold></div>
            <div className="col-5 justify-content-end" id="operationTime"><SpanBold>Час: <SpanNormal>{this.state.operationTime}</SpanNormal></SpanBold></div>
          </div>
          <div className="row justify-content-center"><span className="font-weight-bold">{this.state.operationCap}</span></div>
          <div className="container" id='opContent'><p>{this.state.operationContent}</p></div>

          <div className="row">
            <div className="col-6 offset-6" id="opTeam"><p>Тривалість операції:  {this.state.duration} хвилин</p>
              <p>Оперував: {this.state.surgeon}</p>
              <p>Асистент: {this.state.assistant}</p>
              <p>Анестезіолог: {this.state.anesthetist}</p>
            </div>
          </div>
          <div className="container" id="afterDiagnosis">
            <SpanBold>Післяопераційний діагноз: <SpanNormal> {this.state.diagnosis}</SpanNormal></SpanBold>
          </div>
          <div className="container">
            <SpanBold>Дата: <SpanNormal> {this.state.lastDate}</SpanNormal></SpanBold>
          </div>
          <div className="container">
            <SpanBold>Час: <SpanNormal> {this.state.lastTime}</SpanNormal></SpanBold>
          </div>
          <div className="container ">
            <SpanNormal> Дитина притомна. Серцева діяльність та дихання не порушені. Кровотечі не спостерігається. Призначення виконуються.</SpanNormal>
          </div>
          <div className="row mb-3" id="end"><div className="col-6 offset-6">{this.state.doctor}</div></div>

 {/* appointment */}

              <div className="container">
                <table class="table table-bordered" id="appointmentTable" >
                <caption>(067) 861-60-31 - Олег Володимирович</caption>
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Призначення</th>
                      <th scope="col">Кількість днів</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.drug1 &&   <tr className="text-center">
                      <td scope="col">{this.state.drug1Content}</td>
                      <td scope="col">
                      <select className="appointmentSelect" value={this.state.drugDay1} onChange={this.drugDay1Change} className="custom-select">
              <option value="5 днів" selected>5 днів</option>
              <option value="1 день" >1 день</option>
              <option value="2 дні" >2 дні</option>
              <option value="3 дні" >3 дні</option>
              <option value="4 дні" >4 дні</option>
              <option value="6 днів" >6 днів</option>
              <option value="7 днів" >7 днів</option>
              <option value="8 днів" >8 днів</option>
              <option value="9 днів" >9 днів</option>
              <option value="10 днів" >10 днів</option>              
            </select>
                      </td>
                  </tr> }
                  {this.state.drug2 &&   <tr className="text-center">
                      <td scope="col">{this.state.drug2Content}</td>
                      <td scope="col">
                      <select className="appointmentSelect" value={this.state.drugDay2} onChange={this.drugDay2Change} className="custom-select">
              <option value="2 дні" selected>2 дні</option>
              <option value="1 день" >1 день</option>
              <option value="5 дніd" >5 днів</option>
              <option value="3 дні" >3 дні</option>
              <option value="4 дні" >4 дні</option>
              <option value="6 днів" >6 днів</option>
              <option value="7 днів" >7 днів</option>
              <option value="8 днів" >8 днів</option>
              <option value="9 днів" >9 днів</option>
              <option value="10 днів" >10 днів</option>              
            </select>
                      </td>
                  </tr> }
                  {this.state.drug3 &&   <tr className="text-center">
                      <td scope="col">{this.state.drug3Content}</td>
                      <td scope="col">
                      <select className="appointmentSelect" value={this.state.drugDay3} onChange={this.drugDay3Change} className="custom-select">
              <option value="5 днів" selected>5 днів</option>
              <option value="1 день" >1 день</option>
              <option value="2 дні" >2 дні</option>
              <option value="3 дні" >3 дні</option>
              <option value="4 дні" >4 дні</option>
              <option value="6 днів" >6 днів</option>
              <option value="7 днів" >7 днів</option>
              <option value="8 днів" >8 днів</option>
              <option value="9 днів" >9 днів</option>
              <option value="10 днів" >10 днів</option>              
            </select>
                      </td>
                  </tr> }
                  {this.state.drug4 &&   <tr className="text-center">
                      <td scope="col">{this.state.drug4Content}</td>
                      <td scope="col">
                      <select className="appointmentSelect" value={this.state.drugDay4} onChange={this.drugDay4Change} className="custom-select">
              <option value="5 днів" selected>5 днів</option>
              <option value="1 день" >1 день</option>
              <option value="2 дні" >2 дні</option>
              <option value="3 дні" >3 дні</option>
              <option value="4 дні" >4 дні</option>
              <option value="6 днів" >6 днів</option>
              <option value="7 днів" >7 днів</option>
              <option value="8 днів" >8 днів</option>
              <option value="9 днів" >9 днів</option>
              <option value="10 днів" >10 днів</option>              
            </select>
                      </td>
                  </tr> }                  
                  {this.state.drug5 &&   <tr className="text-center">
                      <td scope="col">{this.state.drug5Content}</td>
                      <td scope="col">
                      <select className="appointmentSelect" value={this.state.drugDay5} onChange={this.drugDay5Change} className="custom-select">
              <option value="2 днів" selected>2 дні</option>
              <option value="1 день" >1 день</option>
              <option value="5 днів" >5 днів</option>
              <option value="3 дні" >3 дні</option>
              <option value="4 дні" >4 дні</option>
              <option value="6 днів" >6 днів</option>
              <option value="7 днів" >7 днів</option>
              <option value="8 днів" >8 днів</option>
              <option value="9 днів" >9 днів</option>
              <option value="10 днів" >10 днів</option>              
            </select>
                      </td>
                  </tr> }</tbody>
                  {this.state.drug6 &&   <tr className="text-center">
                      <td scope="col">{this.state.drug6Content}</td>
                      <td scope="col">
                      <select className="appointmentSelect" value={this.state.drugDay6} onChange={this.drugDay6Change} className="custom-select">
              <option value="5 днів" selected>5 днів</option>
              <option value="1 день" >1 день</option>
              <option value="2 дні" >2 дні</option>
              <option value="3 дні" >3 дні</option>
              <option value="4 дні" >4 дні</option>
              <option value="6 днів" >6 днів</option>
              <option value="7 днів" >7 днів</option>
              <option value="8 днів" >8 днів</option>
              <option value="9 днів" >9 днів</option>
              <option value="10 днів" >10 днів</option>              
            </select>
                      </td>
                  </tr> }
                </table>
              </div>

            

          {this.state.showEpicrisis &&
            <div className="container mb-3" id="epicrisisStart">
              <div className="row ">
                <div className="offset-2 col-5 " ><SpanBold id="cardNumber">№ історії хвороби: <SpanNormal>{this.state.cardNumber}</SpanNormal></SpanBold></div>
                <div className="col-5 justify-content-end" id="child"><SpanBold>Дитина: <SpanNormal> {this.state.patientName}</SpanNormal></SpanBold></div>
              </div>
              <div className="row justify-content-center" ><h3 className="font-weight-bold">ЕПІКРИЗ</h3></div>
              <div className="container ">
                <SpanNormal> Дитина знаходилася на лікуванні в ЛОР-відділенні (щелепно-лицева хірургія) КНП "ТОДКЛ" ТОР з {this.fullDate} по {this.endDateCounter(this.state.daysAmount, this.day, this.month, this.year)}. </SpanNormal>
              </div>
              <div className="container">
                <SpanBold>Скарги: <SpanNormal>{this.state.complaints}</SpanNormal></SpanBold>
              </div>
              <div className="container">
                <SpanBold>Анамнез захворювання: <SpanNormal> {this.state.anamnesisMorbi}</SpanNormal></SpanBold>
              </div>
              <div className="container ">
                <SpanBold>Об'єктивно: <SpanNormal> загальний стан дитини {this.state.generalCondition}. Зі сторони соматичних органів без порушень; {this.state.statusLocalis}</SpanNormal></SpanBold>
              </div>
              <div className="container" >
                <SpanBold>Діагноз: <SpanNormal>{this.state.diagnosis}</SpanNormal></SpanBold>
              </div>
              <div className="container ">
                <SpanNormal> {this.state.operationDate} під загальним знеболенням проведено <SpanBold>{this.state.operation}</SpanBold> Післяопераційний період без ускладнень. </SpanNormal>
              </div>
              <div className="container" >
                <SpanBold>Післяопераційний діагноз: <SpanNormal>{this.state.diagnosis}</SpanNormal></SpanBold>
              </div>
              <div className="container" >
                <SpanBold>Медикаментозне лікування:
              <SpanNormal> <ul>
                    {this.state.drug1 && <li>{this.state.drug1Content}</li>}
                    {this.state.drug2 && <li>{this.state.drug2Content}</li>}
                    {this.state.drug3 && <li>{this.state.drug3Content}</li>}
                    {this.state.drug4 && <li>{this.state.drug4Content}</li>}
                    {this.state.drug5 && <li>{this.state.drug5Content}</li>}
                    {this.state.drug6 && <li>{this.state.drug6Content}</li>}
                  </ul></SpanNormal>
                </SpanBold>
              </div>
              <div className="container ">
                <SpanNormal> Виписана в задовільному загальному стані. Виписка видана батькам на руки. В контакті з інфекційними хворими не перебувала. </SpanNormal>
              </div>
              <div className="container" >
                <SpanBold>Рекомендації: <SpanNormal>{this.state.recommendations}</SpanNormal></SpanBold>
              </div>
              <div className="row justify-content-center" ><h4 className="font-weight-bold">Дані обстежень</h4></div>
              <div className="row justify-content-center" ><h5 className="font-weight-bold">Загальний аналіз крові</h5></div>
              <div className="container">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Hb, г/л</th>
                      <th scope="col">Er, T/л</th>
                      <th scope="col">КП</th>
                      <th scope="col">Leu, T/л</th>
                      <th scope="col">пал, %</th>
                      <th scope="col">сегм, %</th>
                      <th scope="col">еоз, %</th>
                      <th scope="col">лім, %</th>
                      <th scope="col">мон, %</th>
                      <th scope="col">ШОЕ, мм/год</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{this.state.hb}</td>
                      <td>{this.state.er}</td>
                      <td>{this.colorIndexCounter(this.state.hb, this.state.er)}</td>
                      <td>{this.state.leu}</td>
                      <td>{this.state.pal}</td>
                      <td>{this.state.segm}</td>
                      <td>{this.state.eoz}</td>
                      <td>{this.state.limf}</td>
                      <td>{this.monoCounter(this.state.pal, this.state.segm, this.state.eoz, this.state.limf)}</td>
                      <td>{this.state.rse}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div className="row justify-content-center" ><h5 className="font-weight-bold">Загальний аналіз сечі</h5></div>
              <div className="container">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Колір</th>
                      <th scope="col">Прозорість</th>
                      <th scope="col">Питома вага</th>
                      <th scope="col">pH</th>
                      <th scope="col">Білок</th>
                      <th scope="col">Лейкоцити</th>
                      <th scope="col">Плоский епіт.</th>
                      <th scope="col">Перехідний епіт.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{this.state.uColor}</td>
                      <td>{this.state.uOpacity}</td>
                      <td>{this.state.uWeight}</td>
                      <td>{this.state.uPh}</td>
                      <td>{this.state.uProtein}</td>
                      <td>{this.state.uLeu}</td>
                      <td>{this.state.uEp1}</td>
                      <td>{this.state.uEp2}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="container">
                <SpanBold>Глюкоза крові: <SpanNormal>{this.state.glucose} ммоль/л.</SpanNormal></SpanBold>
              </div>
              <div className="container">
                <SpanBold>Зішкріб на ентеробіоз: <SpanNormal>яйця гостриків {this.state.enterobioz}</SpanNormal></SpanBold>
              </div>
              <div className="container">
                <SpanBold>Кал на я/г: <SpanNormal>яйця гельмінтів {this.state.dung}</SpanNormal></SpanBold>
              </div>
            </div>}
          {/* End of Epicrisis */}
          
          {this.state.showCheckLine &&
            <div className="row mb-3">
              <div className="offset-2 col-3"> <button onClick={this.hideFormHC} className={this.state.btnReadyColor}>Готово до друку(CTRL+P)</button></div>
              <div className="col-3"> <button onClick={this.showFormHC} className={this.state.btnReadyColor}>Внести зміни у формі</button></div>
              <div className="col-3"> <button onClick={this.toggleManualPanelHC} className={this.state.btnReadyColor}>Редагувати вручну</button></div>
            </div>}


          {this.state.showManualPanel && <div className="row mb-3">
            <div className="offset-1 col-9 btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary" onClick={this.toggleMP1HC}>Скарги</button>
              <button type="button" className="btn btn-secondary" onClick={this.toggleMP2HC}>Анамнез хвороби</button>
              <button type="button" className="btn btn-secondary" onClick={this.toggleMP3HC}>Анамнез життя</button>
              <button type="button" className="btn btn-secondary" onClick={this.toggleMP4HC}>Об'єктивний стан</button>
              <button type="button" className="btn btn-secondary" onClick={this.toggleMP5HC}>Стан ЩЛХ</button>
              <button type="button" className="btn btn-secondary" onClick={this.toggleMP6HC}>Діагноз</button>
              <button type="button" className="btn btn-secondary" onClick={this.toggleMP7HC}>Протокол</button>
            </div>
          </div>}

          {this.state.showMP1 && <div className="row mb-3">
            <div className="offset-1 col-11 "><textarea value={this.state.complaintsFix} onChange={this.complaintsFixChange} cols="80" rows='5' placeholder="Скарги..." /></div>
          </div>}
          {this.state.showMP2 && <div className="row mb-3">
            <div className="offset-1 col-11 "><textarea value={this.state.anamnesisMorbiFix} onChange={this.anamnesisMorbiFixChange} cols="80" rows='5' placeholder="Анамнез хвороби..." /></div>
          </div>}
          {this.state.showMP3 && <div className="row mb-3">
            <div className="offset-1 col-11 "><textarea value={this.state.anamnesisVitaeFix} onChange={this.anamnesisVitaeFixChange} cols="80" rows='5' placeholder="Анамнез життя..." /></div>
          </div>}
          {this.state.showMP4 && <div className="row mb-3">
            <div className="offset-1 col-11 "><textarea value={this.state.statusPraesensFix} onChange={this.statusPraesensFixChange} cols="80" rows='5' placeholder="Об'єктивний стан..." /></div>
          </div>}
          {this.state.showMP5 && <div className="row mb-3">
            <div className="offset-1 col-11 "><textarea value={this.state.statusLocalisFix} onChange={this.statusLocalisFixChange} cols="80" rows='5' placeholder="Стан щелепно-лицевої ділянки..." /></div>
          </div>}
          {this.state.showMP6 && <div className="row mb-3">
            <div className="offset-1 col-11 "><textarea value={this.state.diagnosisFix} onChange={this.diagnosisFixChange} cols="80" rows='5' placeholder="Діагноз..." /></div>
          </div>}
          {this.state.showMP7 && <div className="row mb-3">
            <div className="offset-1 col-11 "><textarea value={this.state.operationContentFix} onChange={this.operationContentFixChange} cols="80" rows='5' placeholder="Протокол..." /></div>
          </div>}
          {this.state.showManualPanel && <div className="row">
            <div className="offset-1 col-8 "> <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.allFixHC}>Зберегти зміни</button></div>
          </div>}
        </div>
      }

      {/*Form */}

      {this.state.showForm && <div className="container justify-content-center" id="form">
        <div className="row mb-3">
          <div className="col-4 offset-3"><h3>Заповніть форму</h3></div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <select value={this.state.type} onChange={this.typeChange} className="custom-select">
              <option selected>Оберіть патологію</option>
              <option value="periostit">Періостит</option>
              <option value="periodontit">Періодонтит</option>
              <option value="skinWound">Рана шкірних покривів</option>
            </select></div>
          <div className="col-3 mb-3">
            <button onClick={this.showMainFormHC} className={this.state.btnShowFormColor} type="button" id="button-addon2">Підтвердити</button>
          </div></div>
        {this.state.showMainForm && <div>
          <div className="row ">
            <div className="col-2 input-group mb-3">
              <input value={this.state.cardNumber} onChange={this.cardNumberChange} type="text" class="form-control" placeholder="№ історії хвороби..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
            <div className="col-4 input-group mb-3">
              <input value={this.state.patientName} onChange={this.patientNameChange} type="text" class="form-control" placeholder="П.І.Б пацієнта..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
            <div className="col-2">
              <select value={this.state.doctor} onChange={this.doctorChange} className="custom-select">
                <option selected>Оберіть лікаря</option>
                <option value="Куц О.В.">Куц О.В.</option>
                <option value="Кучмій В.Я.">Кучмій В.Я.</option>
                <option value="Панченко В.А.">Панченко В.А.</option>
                <option value="Піх І.І.">Піх І.І.</option>
              </select>
            </div></div>

          {this.state.showPerioLines && <div className="row input-group mb-3">
            <div className="col-8 mr-3 ">
              <input value={this.state.tooth} onChange={this.toothChange} type="text" class="form-control" placeholder="Причинний зуб..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
          </div>}

          {this.state.showSkinWoundLines && <div className="row mb-3">
            <div className="col-4 ">
              <select value={this.state.woundArea} onChange={this.woundAreaChange} className="custom-select">
                <option value="">Оберіть ділянку</option>
                <option value="підщелепної ділянки">підщелепна</option>
                <option value="підборідної ділянки">підборідна</option>
                <option value="щічної ділянки" selected>щічна</option>
                <option value="нижньої губи">нижня губа</option>
                <option value="верхньої губи">верхня губа</option>
                <option value="підочної ділянки">підочна</option>
                <option value="привушно-жувальної ділянки">привушно-жувальна</option>
                <option value="виличної ділянки">вилична</option>
                <option value="скроневої ділянки">скронева</option>
                <option value="лобної ділянки">лобна</option>
              </select></div>
            <div className="col-4">
              <select value={this.state.woundSide} onChange={this.woundSideChange} className="custom-select">
                <option value="">Сторона обличчя</option>
                <option value=" ліворуч">ліва</option>
                <option value=" праворуч">права</option>
              </select>
            </div>
          </div>}

          {this.state.showPerioLines && <div className="row mb-3">
            <div className="col-4">
              <span>Тривалість скарг</span>
            </div>
            <div className="col-2">
              <select value={this.state.start1} onChange={this.start1Change} className="custom-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3" selected>3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.start2} onChange={this.start2Change} className="custom-select">
                <option value="день" selected>день</option>
                <option value="місяць">місяць</option>
                <option value="рік">рік</option>
              </select>
            </div>
          </div>}

          {this.state.showSkinWoundLines && <div className="row mb-3">
            <div className="col-4">
              <span>Дата травми </span>
            </div>
            <div className="col-2">
              <select value={this.state.injuryDate} onChange={this.injuryDateChange} className="custom-select">
                <option value={this.fullDate} selected>{this.fullDate}</option>
                <option value={this.fullDate0}>{this.fullDate0}</option>
              </select>
            </div>
            <div className="col-2">
              <input value={this.state.injuryTime} onChange={this.injuryTimeChange} type="text" class="form-control" placeholder="Час травми..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>}

          {this.state.showSkinWoundLines && <div className="row mb-3">
            <div className="col-3">
              <select value={this.state.injuryReason} onChange={this.injuryReasonChange} className="custom-select">
                <option value="" selected>Відбулась в результаті</option>
                <option value="удару до гойдалки" selected>удару до гойдалки</option>
                <option value="удару до краю мебелі" selected>удару до краю мебелі</option>
                <option value="падіння та удару до землі" selected>падіння та удару до землі</option>
                <option value="зіткнення з іншою дитиною" selected>зіткнення з іншою дитиною</option>
              </select>
            </div>
            <div className="col-5">
              <input value={this.state.injuryReason} onChange={this.injuryReasonChange} type="text" class="form-control" placeholder="відбулась в результаті..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>}

          <div className="row mb-3">

            <div className="col-1"><span>Вагітність</span></div>
            <div className="col-2">
              <select value={this.state.pregnancy} onChange={this.pregnancyChange} className="custom-select">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            <div className="col-1"><span>Пологи</span></div>
            <div className="col-2">
              <select value={this.state.childbirth} onChange={this.childbirthChange} className="custom-select">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="col-2">
              <input value={this.state.birthWeight} onChange={this.birthWeightChange} type="text" class="form-control" placeholder="Вага при народженні..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>

          <div className="row mb-3">

            <div className="col-2"><span>Загальний стан</span></div>
            <div className="col-2">
              <select value={this.state.generalCondition} onChange={this.generalConditionChange} className="custom-select">
                <option value="близький до задовільного">близький до задовільного</option>
                <option value="середнього ступеню важкості" selected>середнього ступеню важкості</option>
                <option value="важкий">важкий</option>
              </select>
            </div>
            <div className="col-2">
              <input value={this.state.weight} onChange={this.weightChange} type="text" class="form-control" placeholder="Вага пацієнта..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
            <div className="col-2">
              <input value={this.state.age} onChange={this.ageChange} type="text" class="form-control" placeholder="Вік пацієнта..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>

          {this.state.showPerioLines && <div className="row mb-3">

            <div className="col-3"><span>Руйнування коронки</span></div>
            <div className="col-3">
              <select value={this.state.crownDestruction} onChange={this.crownDestructionChange} className="custom-select">
                <option value="частково" selected>частково</option>
                <option value="повністю" >повністю</option>
              </select>
            </div>

            <div className="col-2">
              <input value={this.state.area} onChange={this.areaChange} type="text" class="form-control" placeholder="ділянка запалення(через кому)..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>}

          {this.state.showSkinWoundLines && <div className="row mb-3">
            <div className="col-2 ">
              <select value={this.state.woundType} onChange={this.woundTypeChange} className="custom-select">
                <option value="" selected>Вид рани</option>
                <option value="розсічена">розсічена</option>
                <option value="рвана">рвана</option>
                <option value="скальповано-рвана" >скальповано-рвана</option>
                <option value="рублена">рублена</option>
                <option value="колота">колота</option>
                <option value="різана">різана</option>
                <option value="скальпована">скальпована</option>
                <option value="забійно-рвана">забійно-рвана</option>
              </select></div>
            <div className="col-2">
              <input value={this.state.woundLength} onChange={this.woundLengthChange} type="text" class="form-control" placeholder="Довжина(см)" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
            <div className="col-2">
              <input value={this.state.woundWidth} onChange={this.woundWidthChange} type="text" class="form-control" placeholder="Ширина(см)" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
            <div className="col-2">
              <input value={this.state.woundDepth} onChange={this.woundDepthChange} type="text" class="form-control" placeholder="Глибина(см)" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>}

          {this.state.showSkinWoundLines && <div className="row mb-3">
            <div className="col-2 ">
              <select value={this.state.woundForm} onChange={this.woundFormChange} className="custom-select">
                <option value="" selected>форма рани</option>
                <option value="неправильної форми">неправильна</option>
                <option value="лінійної форми">лінійна</option>
                <option value="веретеноподібної форми">веретеноподібна</option>
                <option value="серпоподібної форми">серпоподібна</option>
                <option value="зигзагоподібної форми">зигзагоподібна</option>
                <option value="округлої форми">округла</option>
                <option value="ромбоподібної форми">ромбоподібна</option>
              </select></div>
            <div className="col-2">
              <select value={this.state.woundLedges} onChange={this.woundLedgesChange} className="custom-select">
                <option value="" selected>краї рани</option>
                <option value="рівні">рівні</option>
                <option value="нерівні">нерівні</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.woundBleeding} onChange={this.woundBleedingChange} className="custom-select">
                <option value="" selected>кровточивість</option>
                <option value="значна">значна</option>
                <option value="незначна">незначна</option>
                <option value="відсутня">відсутня</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.woundAliens} onChange={this.woundAliensChange} className="custom-select">
                <option value="" selected>забруднення рани</option>
                <option value="Візуально сторонніх тіл в рані не виявлено">відсутнє</option>
                <option value="Рана забруднена брудом">брудом</option>
                <option value="Рана забруднена землею">землею</option>
                <option value="Рана забруднена піском">піском</option>
                <option value="Рана забруднена дрібним камінням">дрібним камінням</option>
                <option value="Рана забруднена залишками фарби">залишками фарби</option>
              </select>
            </div>
          </div>}

          <div className="row mb-3">

            <div className="col-2">
              <select value={this.state.drugName1} onChange={this.drugName1Change} className="custom-select">
                <option selected>Антибіотик</option>
                <option value="amoxyclav">Амоксиклав</option>
                <option value="lincomycin">Лінкоміцин</option>
                <option value="sumamed">Сумамед</option>
                <option value="cefodox">Цефодокс</option>
                <option value="loprax">Лопракс</option>
                <option value="ceftriaxon">Цефтріаксон</option>
                <option value="cefotaxim">Цефотаксим</option>
                <option value="amicyl">Аміцил</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.drugName2} onChange={this.drugName2Change} className="custom-select">
                <option selected>Протизапальний</option>
                <option value="nurofen">Нурофен</option>
                <option value="paracetamol">Парацетамол</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.drugName3} onChange={this.drugName3Change} className="custom-select">
                <option selected>Пробіотик</option>
                <option value="neoflorum">Неофлорум</option>
                <option value="probiz">Пробіз</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.drugName4} onChange={this.drugName4Change} className="custom-select">
                <option selected>Антигістамінний</option>
                <option value="loratadyn">Лоратадин</option>
                <option value="fenistyl">Феністил</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-2">
              <select value={this.state.drugName5} onChange={this.drugName5Change} className="custom-select">
                <option selected>Інші</option>
                <option value="metrogil">Метрогіл</option>
                <option value="soda">Содовий розчин</option>
              </select></div>
            <div className="col-6 input-group">
              <input value={this.state.drugName6} onChange={this.drugName6Change} type="text" class="form-control" placeholder="Призначення..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>

          <div className="row ">
            <div className="col-2 input-group mb-3">
              <input value={this.state.protocolNumber} onChange={this.protocolNumberChange} type="text" class="form-control" placeholder="№ протоколу" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
            <div className="col-2 "><span>Дата операції</span></div>
            <div className="col-2">
              <select value={this.state.operationDate} onChange={this.operationDateChange} className="custom-select">
                <option value={this.fullDate} selected>{this.fullDate}</option>
                <option value={this.fullDate2}>{this.fullDate2}</option>
              </select>
            </div>
            <div className="col-2 input-group mb-3">
              <input value={this.state.operationTime} onChange={this.operationTimeChange} type="text" class="form-control" placeholder="Час операції..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
          </div>


          {this.state.showPerioLines && <div className="row mb-3">

            <div className="col-4">
              <select value={this.state.pliers} onChange={this.pliersChange} className="custom-select">
                <option value="" selected>оберіть щипці</option>
                <option value="прямих щипців" >прямі</option>
                <option value="багнетоподібних щипців">багнетоподібні</option>
                <option value="дзьобоподібних щипців" >дзьобоподібні</option>
              </select>
            </div>
            <div className="col-4">
              <select value={this.state.elevators} onChange={this.elevatorsChange} className="custom-select">
                <option value="" selected>оберіть елеватор</option>
                <option value=" та прямого елеватора" >прямий</option>
                <option value=" та кутового елеватора">кутовий</option>
              </select>
            </div>
          </div>}

          {this.state.showSkinWoundLines && <div className="row mb-3">
            <div className="col-3">
              <select value={this.state.sutureType} onChange={this.sutureTypeChange} className="custom-select">
                <option value="" selected>вид швів</option>
                <option value="вузловими швами " >вузлові</option>
                <option value="матрацними ">матрацні</option>
                <option value="внутрішньошкірним безперервним " >внутрішньошкірний</option>
              </select>
            </div>
            <div className="col-3">
              <select value={this.state.sutureMaterial} onChange={this.sutureMaterialChange} className="custom-select">
                <option value="" selected>назва матеріалу</option>
                <option value="PDS " >PDS</option>
                <option value="Vicryl ">Vicryl</option>
                <option value="Maxon " >Maxon</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.sutureSize} onChange={this.sutureSizeChange} className="custom-select">
                <option value="" selected>розмір</option>
                <option value="3-0 " >3-0</option>
                <option value="4-0 " >4-0</option>
                <option value="5-0 " >5-0</option>
                <option value="6-0 " >6-0</option>
              </select>
            </div>
          </div>}


          <div className="row mb-3">

            <div className="col-2">
              <input value={this.state.duration} onChange={this.durationChange} type="text" class="form-control" placeholder="Тривалість ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>

            <div className="col-2">
              <select value={this.state.surgeon} onChange={this.surgeonChange} className="custom-select">
                <option value='-' selected>хірург</option>
                <option value="Куц О.В.">Куц О.В.</option>
                <option value="Кучмій В.Я.">Кучмій В.Я.</option>
                <option value="Панченко В.А.">Панченко В.А.</option>
                <option value="Піх І.І.">Піх І.І.</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.assistant} onChange={this.assistantChange} className="custom-select">
                <option selected value="-">асистент</option>
                <option value="Куц О.В.">Куц О.В.</option>
                <option value="Кучмій В.Я.">Кучмій В.Я.</option>
                <option value="Панченко В.А.">Панченко В.А.</option>
                <option value="Піх І.І.">Піх І.І.</option>
              </select>
            </div>
            <div className="col-2">
              <select value={this.state.anesthetist} onChange={this.anesthetistChange} className="custom-select">
                <option selected>анестезілог</option>
                <option value="Решетуха О.В.">Решетуха О.В.</option>
                <option value="Криницький Б.В.">Криницький Б.В.</option>
                <option value="Романенко Л.М.">Романенко Л.М.</option>
                <option value="Панченко О.І.">Панченко О.І.</option>
                <option value="Германюк Ю.В.">Германюк Ю.В.</option>
                <option value="Голінка Ю.Я.">Голінка Ю.Я.</option>
                <option value="Блажевич І.Є.">Блажевич І.Є.</option>
                <option value="Бренькач Н.С.">Бренькач Н.С.</option>
                <option value="Шалабай І.Г.">Шалабай І.Г.</option>
                <option value="Ткачук С.І.">Ткачук С.І.</option>
                <option value="Дубчак О.П.">Дубчак О.П.</option>
                <option value="Москальчук О.О.">Москальчук О.О.</option>
                <option value="Дзюбановська Л.Л.">Дзюбановська Л.Л.</option>
                <option value="Цісарський С.В.">Цісарський С.В.</option>
              </select>
            </div>
          </div>

          {this.state.showEpicrisis && 
          <div className="container" id="epicrisisForm">
          <div className="row mb-3">
            <div className="col-6">
              <span>Тривалість лікування</span>
            </div>
            <div className="col-2">
              <select value={this.state.daysAmount} onChange={this.daysAmountChange} className="custom-select">
                <option value="0">Днів</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>

            <div className="row mb-3">
              <div className="col-1"> <input value={this.state.hb} onChange={this.hbChange} type="text" class="form-control" placeholder="Hb..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
              <div className="col-1"><input value={this.state.er} onChange={this.erChange} type="text" class="form-control" placeholder="Er..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
              <div className="col-1"><input value={this.state.leu} onChange={this.leuChange} type="text" class="form-control" placeholder="Leu..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
              <div className="col-1"> <input value={this.state.pal} onChange={this.palChange} type="text" class="form-control" placeholder="Пал..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
              <div className="col-1"><input value={this.state.segm} onChange={this.segmChange} type="text" class="form-control" placeholder="Сегм..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
              <div className="col-1"><input value={this.state.eoz} onChange={this.eozChange} type="text" class="form-control" placeholder="Еоз..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
              <div className="col-1"> <input value={this.state.limf} onChange={this.limfChange} type="text" class="form-control" placeholder="Лімф..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
              <div className="col-1"><input value={this.state.rse} onChange={this.rseChange} type="text" class="form-control" placeholder="ШОЕ..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
            </div>

            <div className="row mb-3">

              <div className="col-2"> <input value={this.state.glucose} onChange={this.glucoseChange} type="text" class="form-control" placeholder="Глюкоза крові..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
              <div className="col-2">
                <select value={this.state.enterobioz} onChange={this.enterobiozChange} className="custom-select">
                  <option value="не виявлено." selected>яйця гостриків не виявлено</option>
                  <option value="виявлено." >виявлено</option>
                </select>
              </div>
              <div className="col-2">
                <select value={this.state.dung} onChange={this.dungChange} className="custom-select">
                  <option value="не виявлено." selected>яйця гельмінтів не виявлено</option>
                  <option value="виявлено." >виявлено</option>
                </select>
              </div>
              <div className="col-2"><button onClick={this.toggleUrineHC} className={this.state.btnShowFormColor} type="button" id="button-addon2">Ред. аналіз сечі</button></div>
            </div>

         {this.state.showUrine && <div className="row mb-3">
            <div className="col-1">  <select value={this.state.uColor} onChange={this.uColorChange} className="custom-select">
              <option value="світло-жовта" selected>світло-жовта</option>
              <option value="темно-жовта" >темно-жовта</option>
              <option value="бліда" >бліда</option>
              <option value="темно-жовта" >темно-жовта</option>
              <option value="помаранчева" >помаранчева</option>
              <option value="рожева" >рожева</option>
              <option value="темно-рожева" >темно-рожева</option>
            </select></div>
            <div className="col-1">  <select value={this.state.uOpacity} onChange={this.uOpacityChange} className="custom-select">
              <option value="прозора" selected>прозора</option>
              <option value="слабко-мутна" >слабко-мутна</option>
              <option value="мутна" >мутна</option>
            </select></div>
            <div className="col-1"><input value={this.state.uWeight} onChange={this.uWeightChange} type="text" class="form-control" placeholder="питома вага..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
            <div className="col-1">  <select value={this.state.uPh} onChange={this.uPhChange} className="custom-select">
              <option value="6,0" selected>6,0</option>
              <option value="4,0" >4,0</option>
              <option value="4,5" >4,5</option>
              <option value="5,0" >5,0</option>
              <option value="5,5" >5,5</option>
              <option value="6,5" >6,5</option>
              <option value="7,0" >7,0</option>
              <option value="7,5" >7,5</option>
              <option value="8,0" >8,0</option>
              <option value="8,5" >8,5</option>
              <option value="9,0" >9,0</option>
            </select></div>
            <div className="col-1"><input value={this.state.uProtein} onChange={this.uProteinChange} type="text" class="form-control" placeholder="білок..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
            <div className="col-1"><input value={this.state.uLeu} onChange={this.uLeuChange} type="text" class="form-control" placeholder="лейкоцити..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
            <div className="col-1"> <input value={this.state.uEp1} onChange={this.uEp1Change} type="text" class="form-control" placeholder="плоский епітелій..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
            <div className="col-1"><input value={this.state.uEp2} onChange={this.uEp2Change} type="text" class="form-control" placeholder="перехідний епітелій..." aria-label="Recipient's username" aria-describedby="button-addon2" /></div>
          </div>}
          </div>}

          <div className="row mb-3">
            <div className="col-8 mb-3"><button type="button" onClick={this.showContentHC} className="btn btn-outline-secondary btn-lg btn-block">Зберегти та перевірити</button></div>
            <div className="col-8 mb-3"><button type="button" onClick={this.instantPrintHC} className="btn btn-outline-secondary btn-lg btn-block">Друкувати без перевірки(CTRL+P)</button></div>
            {this.state.showEpicrisisBtn && <div className="col-8 mb-3"><button type="button" onClick={this.showEpicrisisHC} className="btn btn-outline-secondary btn-lg btn-block">Додатково створити епікриз</button></div>}
          </div>

        </div>}
      </div>}
    </div>
    );
  }
}



export default Medicine;