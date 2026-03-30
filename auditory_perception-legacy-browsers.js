/**************************** 
 * Auditory_Perception *
 ****************************/


// store info about the experiment session:
let expName = 'auditory_perception';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_2
import {sound as ps_sound} from 'psychopy';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);





flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions_blocks.xlsx', 'path': 'conditions_blocks.xlsx'},
    {'name': 'conditions_block1.xlsx', 'path': 'conditions_block1.xlsx'},
    {'name': 'block1/1-km-po-tm-intensity.wav', 'path': 'block1/1-km-po-tm-intensity.wav'},
    {'name': 'block1/1-ko-po-tm-intensity.wav', 'path': 'block1/1-ko-po-tm-intensity.wav'},
    {'name': 'block1/2-pmm-ti-km-f0.wav', 'path': 'block1/2-pmm-ti-km-f0.wav'},
    {'name': 'block1/2-pm-ti-km-f0.wav', 'path': 'block1/2-pm-ti-km-f0.wav'},
    {'name': 'block1/3-km-tmm-pm-intensity.wav', 'path': 'block1/3-km-tmm-pm-intensity.wav'},
    {'name': 'block1/3-ke-tmm-pm-intensity.wav', 'path': 'block1/3-ke-tmm-pm-intensity.wav'},
    {'name': 'block1/4-tm-pm-km-intensity.wav', 'path': 'block1/4-tm-pm-km-intensity.wav'},
    {'name': 'block1/4-ti-pm-km-intensity.wav', 'path': 'block1/4-ti-pm-km-intensity.wav'},
    {'name': 'block1/5-pm-ku-tm-f0.wav', 'path': 'block1/5-pm-ku-tm-f0.wav'},
    {'name': 'block1/5-pu-ku-tm-f0.wav', 'path': 'block1/5-pu-ku-tm-f0.wav'},
    {'name': 'block1/6-pmm-ke-tm-intensity.wav', 'path': 'block1/6-pmm-ke-tm-intensity.wav'},
    {'name': 'block1/6-pm-ke-tm-intensity.wav', 'path': 'block1/6-pm-ke-tm-intensity.wav'},
    {'name': 'block1/7-tm-km-pm-f0.wav', 'path': 'block1/7-tm-km-pm-f0.wav'},
    {'name': 'block1/7-to-km-pm-f0.wav', 'path': 'block1/7-to-km-pm-f0.wav'},
    {'name': 'block1/8-pm-tmm-km-f0.wav', 'path': 'block1/8-pm-tmm-km-f0.wav'},
    {'name': 'block1/8-pa-tmm-km-f0.wav', 'path': 'block1/8-pa-tmm-km-f0.wav'},
    {'name': 'block1/9-tm-pmm-km-intensity.wav', 'path': 'block1/9-tm-pmm-km-intensity.wav'},
    {'name': 'block1/9-tmm-pmm-km-intensity.wav', 'path': 'block1/9-tmm-pmm-km-intensity.wav'},
    {'name': 'block1/10-pm-to-km-f0.wav', 'path': 'block1/10-pm-to-km-f0.wav'},
    {'name': 'block1/10-pmm-to-km-f0.wav', 'path': 'block1/10-pmm-to-km-f0.wav'},
    {'name': 'block1/11-pa-ka-tm-f0.wav', 'path': 'block1/11-pa-ka-tm-f0.wav'},
    {'name': 'block1/11-pm-ka-tm-f0.wav', 'path': 'block1/11-pm-ka-tm-f0.wav'},
    {'name': 'block1/12-pu-kmm-tm-f0.wav', 'path': 'block1/12-pu-kmm-tm-f0.wav'},
    {'name': 'block1/12-pm-kmm-tm-f0.wav', 'path': 'block1/12-pm-kmm-tm-f0.wav'},
    {'name': 'block1/13-tm-ku-pm-intensity.wav', 'path': 'block1/13-tm-ku-pm-intensity.wav'},
    {'name': 'block1/13-tmm-ku-pm-intensity.wav', 'path': 'block1/13-tmm-ku-pm-intensity.wav'},
    {'name': 'block1/14-pe-tm-km-f0.wav', 'path': 'block1/14-pe-tm-km-f0.wav'},
    {'name': 'block1/14-pm-tm-km-f0.wav', 'path': 'block1/14-pm-tm-km-f0.wav'},
    {'name': 'block1/15-ti-kmm-pm-intensity.wav', 'path': 'block1/15-ti-kmm-pm-intensity.wav'},
    {'name': 'block1/15-tm-kmm-pm-intensity.wav', 'path': 'block1/15-tm-kmm-pm-intensity.wav'},
    {'name': 'block1/16-ka-tm-pm-intensity.wav', 'path': 'block1/16-ka-tm-pm-intensity.wav'},
    {'name': 'block1/16-km-tm-pm-intensity.wav', 'path': 'block1/16-km-tm-pm-intensity.wav'},
    {'name': 'block1/17-ti-pi-km-intensity.wav', 'path': 'block1/17-ti-pi-km-intensity.wav'},
    {'name': 'block1/17-tm-pi-km-intensity.wav', 'path': 'block1/17-tm-pi-km-intensity.wav'},
    {'name': 'block1/18-km-tm-pm-intensity.wav', 'path': 'block1/18-km-tm-pm-intensity.wav'},
    {'name': 'block1/18-kmm-tm-pm-intensity.wav', 'path': 'block1/18-kmm-tm-pm-intensity.wav'},
    {'name': 'block1/19-pm-km-tm-intensity.wav', 'path': 'block1/19-pm-km-tm-intensity.wav'},
    {'name': 'block1/19-pe-km-tm-intensity.wav', 'path': 'block1/19-pe-km-tm-intensity.wav'},
    {'name': 'block1/20-pm-tmm-km-f0.wav', 'path': 'block1/20-pm-tmm-km-f0.wav'},
    {'name': 'block1/20-po-tmm-km-f0.wav', 'path': 'block1/20-po-tmm-km-f0.wav'},
    {'name': 'block1/21-km-pu-tm-intensity.wav', 'path': 'block1/21-km-pu-tm-intensity.wav'},
    {'name': 'block1/21-ku-pu-tm-intensity.wav', 'path': 'block1/21-ku-pu-tm-intensity.wav'},
    {'name': 'block1/22-kmm-pa-tm-f0.wav', 'path': 'block1/22-kmm-pa-tm-f0.wav'},
    {'name': 'block1/22-km-pa-tm-f0.wav', 'path': 'block1/22-km-pa-tm-f0.wav'},
    {'name': 'block1/23-km-pm-tm-f0.wav', 'path': 'block1/23-km-pm-tm-f0.wav'},
    {'name': 'block1/23-ku-pm-tm-f0.wav', 'path': 'block1/23-ku-pm-tm-f0.wav'},
    {'name': 'block1/24-pm-te-km-f0.wav', 'path': 'block1/24-pm-te-km-f0.wav'},
    {'name': 'block1/24-pe-te-km-f0.wav', 'path': 'block1/24-pe-te-km-f0.wav'},
    {'name': 'block1/25-km-tmm-pm-intensity.wav', 'path': 'block1/25-km-tmm-pm-intensity.wav'},
    {'name': 'block1/25-ka-tmm-pm-intensity.wav', 'path': 'block1/25-ka-tmm-pm-intensity.wav'},
    {'name': 'block1/26-kmm-to-pm-intensity.wav', 'path': 'block1/26-kmm-to-pm-intensity.wav'},
    {'name': 'block1/26-km-to-pm-intensity.wav', 'path': 'block1/26-km-to-pm-intensity.wav'},
    {'name': 'block1/27-pm-tmm-km-f0.wav', 'path': 'block1/27-pm-tmm-km-f0.wav'},
    {'name': 'block1/27-pmm-tmm-km-f0.wav', 'path': 'block1/27-pmm-tmm-km-f0.wav'},
    {'name': 'block1/28-ko-pm-tm-intensity.wav', 'path': 'block1/28-ko-pm-tm-intensity.wav'},
    {'name': 'block1/28-km-pm-tm-intensity.wav', 'path': 'block1/28-km-pm-tm-intensity.wav'},
    {'name': 'block1/29-ka-ta-pm-intensity.wav', 'path': 'block1/29-ka-ta-pm-intensity.wav'},
    {'name': 'block1/29-km-ta-pm-intensity.wav', 'path': 'block1/29-km-ta-pm-intensity.wav'},
    {'name': 'block1/30-km-pi-tm-intensity.wav', 'path': 'block1/30-km-pi-tm-intensity.wav'},
    {'name': 'block1/30-kmm-pi-tm-intensity.wav', 'path': 'block1/30-kmm-pi-tm-intensity.wav'},
    {'name': 'block1/31-te-pmm-km-f0.wav', 'path': 'block1/31-te-pmm-km-f0.wav'},
    {'name': 'block1/31-tm-pmm-km-f0.wav', 'path': 'block1/31-tm-pmm-km-f0.wav'},
    {'name': 'block1/32-ta-pm-km-f0.wav', 'path': 'block1/32-ta-pm-km-f0.wav'},
    {'name': 'block1/32-tm-pm-km-f0.wav', 'path': 'block1/32-tm-pm-km-f0.wav'},
    {'name': 'block1/33-tm-pe-km-f0.wav', 'path': 'block1/33-tm-pe-km-f0.wav'},
    {'name': 'block1/33-tmm-pe-km-f0.wav', 'path': 'block1/33-tmm-pe-km-f0.wav'},
    {'name': 'block1/34-ku-pmm-tm-intensity.wav', 'path': 'block1/34-ku-pmm-tm-intensity.wav'},
    {'name': 'block1/34-km-pmm-tm-intensity.wav', 'path': 'block1/34-km-pmm-tm-intensity.wav'},
    {'name': 'block1/35-to-ko-pm-f0.wav', 'path': 'block1/35-to-ko-pm-f0.wav'},
    {'name': 'block1/35-tm-ko-pm-f0.wav', 'path': 'block1/35-tm-ko-pm-f0.wav'},
    {'name': 'block1/36-pm-km-tm-f0.wav', 'path': 'block1/36-pm-km-tm-f0.wav'},
    {'name': 'block1/36-pmm-km-tm-f0.wav', 'path': 'block1/36-pmm-km-tm-f0.wav'},
    {'name': 'block1/37-tmm-ka-pm-intensity.wav', 'path': 'block1/37-tmm-ka-pm-intensity.wav'},
    {'name': 'block1/37-tm-ka-pm-intensity.wav', 'path': 'block1/37-tm-ka-pm-intensity.wav'},
    {'name': 'block1/38-tm-kmm-pm-intensity.wav', 'path': 'block1/38-tm-kmm-pm-intensity.wav'},
    {'name': 'block1/38-to-kmm-pm-intensity.wav', 'path': 'block1/38-to-kmm-pm-intensity.wav'},
    {'name': 'block1/39-pm-ti-km-f0.wav', 'path': 'block1/39-pm-ti-km-f0.wav'},
    {'name': 'block1/39-pi-ti-km-f0.wav', 'path': 'block1/39-pi-ti-km-f0.wav'},
    {'name': 'block1/40-pm-km-tm-f0.wav', 'path': 'block1/40-pm-km-tm-f0.wav'},
    {'name': 'block1/40-pi-km-tm-f0.wav', 'path': 'block1/40-pi-km-tm-f0.wav'},
    {'name': 'block1/41-kmm-tu-pm-f0.wav', 'path': 'block1/41-kmm-tu-pm-f0.wav'},
    {'name': 'block1/41-km-tu-pm-f0.wav', 'path': 'block1/41-km-tu-pm-f0.wav'},
    {'name': 'block1/42-km-te-pm-intensity.wav', 'path': 'block1/42-km-te-pm-intensity.wav'},
    {'name': 'block1/42-ke-te-pm-intensity.wav', 'path': 'block1/42-ke-te-pm-intensity.wav'},
    {'name': 'block1/43-km-tm-pm-intensity.wav', 'path': 'block1/43-km-tm-pm-intensity.wav'},
    {'name': 'block1/43-ku-tm-pm-intensity.wav', 'path': 'block1/43-ku-tm-pm-intensity.wav'},
    {'name': 'block1/44-tm-pmm-km-f0.wav', 'path': 'block1/44-tm-pmm-km-f0.wav'},
    {'name': 'block1/44-ti-pmm-km-f0.wav', 'path': 'block1/44-ti-pmm-km-f0.wav'},
    {'name': 'conditions_block2.xlsx', 'path': 'conditions_block2.xlsx'},
    {'name': 'block2/1-tm-kmm-pm-f0.wav', 'path': 'block2/1-tm-kmm-pm-f0.wav'},
    {'name': 'block2/1-ta-kmm-pm-f0.wav', 'path': 'block2/1-ta-kmm-pm-f0.wav'},
    {'name': 'block2/2-pm-ku-tm-f0.wav', 'path': 'block2/2-pm-ku-tm-f0.wav'},
    {'name': 'block2/2-pmm-ku-tm-f0.wav', 'path': 'block2/2-pmm-ku-tm-f0.wav'},
    {'name': 'block2/3-pm-km-tm-f0.wav', 'path': 'block2/3-pm-km-tm-f0.wav'},
    {'name': 'block2/3-pu-km-tm-f0.wav', 'path': 'block2/3-pu-km-tm-f0.wav'},
    {'name': 'block2/4-pm-to-km-f0.wav', 'path': 'block2/4-pm-to-km-f0.wav'},
    {'name': 'block2/4-po-to-km-f0.wav', 'path': 'block2/4-po-to-km-f0.wav'},
    {'name': 'block2/5-tm-kmm-pm-intensity.wav', 'path': 'block2/5-tm-kmm-pm-intensity.wav'},
    {'name': 'block2/5-to-kmm-pm-intensity.wav', 'path': 'block2/5-to-kmm-pm-intensity.wav'},
    {'name': 'block2/6-km-pm-tm-intensity.wav', 'path': 'block2/6-km-pm-tm-intensity.wav'},
    {'name': 'block2/6-ki-pm-tm-intensity.wav', 'path': 'block2/6-ki-pm-tm-intensity.wav'},
    {'name': 'block2/7-km-ti-pm-intensity.wav', 'path': 'block2/7-km-ti-pm-intensity.wav'},
    {'name': 'block2/7-kmm-ti-pm-intensity.wav', 'path': 'block2/7-kmm-ti-pm-intensity.wav'},
    {'name': 'block2/8-tm-ka-pm-intensity.wav', 'path': 'block2/8-tm-ka-pm-intensity.wav'},
    {'name': 'block2/8-ta-ka-pm-intensity.wav', 'path': 'block2/8-ta-ka-pm-intensity.wav'},
    {'name': 'block2/9-tm-kmm-pm-f0.wav', 'path': 'block2/9-tm-kmm-pm-f0.wav'},
    {'name': 'block2/9-tmm-kmm-pm-f0.wav', 'path': 'block2/9-tmm-kmm-pm-f0.wav'},
    {'name': 'block2/10-pe-ke-tm-f0.wav', 'path': 'block2/10-pe-ke-tm-f0.wav'},
    {'name': 'block2/10-pm-ke-tm-f0.wav', 'path': 'block2/10-pm-ke-tm-f0.wav'},
    {'name': 'block2/11-kmm-po-tm-intensity.wav', 'path': 'block2/11-kmm-po-tm-intensity.wav'},
    {'name': 'block2/11-km-po-tm-intensity.wav', 'path': 'block2/11-km-po-tm-intensity.wav'},
    {'name': 'block2/12-pi-kmm-tm-intensity.wav', 'path': 'block2/12-pi-kmm-tm-intensity.wav'},
    {'name': 'block2/12-pm-kmm-tm-intensity.wav', 'path': 'block2/12-pm-kmm-tm-intensity.wav'},
    {'name': 'block2/13-te-km-pm-f0.wav', 'path': 'block2/13-te-km-pm-f0.wav'},
    {'name': 'block2/13-tm-km-pm-f0.wav', 'path': 'block2/13-tm-km-pm-f0.wav'},
    {'name': 'block2/14-ki-pi-tm-intensity.wav', 'path': 'block2/14-ki-pi-tm-intensity.wav'},
    {'name': 'block2/14-km-pi-tm-intensity.wav', 'path': 'block2/14-km-pi-tm-intensity.wav'},
    {'name': 'block2/15-to-pmm-km-f0.wav', 'path': 'block2/15-to-pmm-km-f0.wav'},
    {'name': 'block2/15-tm-pmm-km-f0.wav', 'path': 'block2/15-tm-pmm-km-f0.wav'},
    {'name': 'block2/16-to-pm-km-intensity.wav', 'path': 'block2/16-to-pm-km-intensity.wav'},
    {'name': 'block2/16-tm-pm-km-intensity.wav', 'path': 'block2/16-tm-pm-km-intensity.wav'},
    {'name': 'block2/17-tmm-ki-pm-f0.wav', 'path': 'block2/17-tmm-ki-pm-f0.wav'},
    {'name': 'block2/17-tm-ki-pm-f0.wav', 'path': 'block2/17-tm-ki-pm-f0.wav'},
    {'name': 'block2/18-km-pmm-tm-intensity.wav', 'path': 'block2/18-km-pmm-tm-intensity.wav'},
    {'name': 'block2/18-kmm-pmm-tm-intensity.wav', 'path': 'block2/18-kmm-pmm-tm-intensity.wav'},
    {'name': 'block2/19-km-tmm-pm-intensity.wav', 'path': 'block2/19-km-tmm-pm-intensity.wav'},
    {'name': 'block2/19-ku-tmm-pm-intensity.wav', 'path': 'block2/19-ku-tmm-pm-intensity.wav'},
    {'name': 'block2/20-km-pm-tm-f0.wav', 'path': 'block2/20-km-pm-tm-f0.wav'},
    {'name': 'block2/20-ka-pm-tm-f0.wav', 'path': 'block2/20-ka-pm-tm-f0.wav'},
    {'name': 'block2/21-km-tu-pm-intensity.wav', 'path': 'block2/21-km-tu-pm-intensity.wav'},
    {'name': 'block2/21-ku-tu-pm-intensity.wav', 'path': 'block2/21-ku-tu-pm-intensity.wav'},
    {'name': 'block2/22-km-pe-tm-intensity.wav', 'path': 'block2/22-km-pe-tm-intensity.wav'},
    {'name': 'block2/22-kmm-pe-tm-intensity.wav', 'path': 'block2/22-kmm-pe-tm-intensity.wav'},
    {'name': 'block2/23-pm-tmm-km-f0.wav', 'path': 'block2/23-pm-tmm-km-f0.wav'},
    {'name': 'block2/23-pi-tmm-km-f0.wav', 'path': 'block2/23-pi-tmm-km-f0.wav'},
    {'name': 'block2/24-km-tm-pm-intensity.wav', 'path': 'block2/24-km-tm-pm-intensity.wav'},
    {'name': 'block2/24-ke-tm-pm-intensity.wav', 'path': 'block2/24-ke-tm-pm-intensity.wav'},
    {'name': 'block2/25-tm-pi-km-f0.wav', 'path': 'block2/25-tm-pi-km-f0.wav'},
    {'name': 'block2/25-ti-pi-km-f0.wav', 'path': 'block2/25-ti-pi-km-f0.wav'},
    {'name': 'block2/26-pm-ka-tm-f0.wav', 'path': 'block2/26-pm-ka-tm-f0.wav'},
    {'name': 'block2/26-pmm-ka-tm-f0.wav', 'path': 'block2/26-pmm-ka-tm-f0.wav'},
    {'name': 'block2/27-pm-tm-km-f0.wav', 'path': 'block2/27-pm-tm-km-f0.wav'},
    {'name': 'block2/27-pmm-tm-km-f0.wav', 'path': 'block2/27-pmm-tm-km-f0.wav'},
    {'name': 'block2/28-pu-tu-km-f0.wav', 'path': 'block2/28-pu-tu-km-f0.wav'},
    {'name': 'block2/28-pm-tu-km-f0.wav', 'path': 'block2/28-pm-tu-km-f0.wav'},
    {'name': 'block2/29-po-km-tm-f0.wav', 'path': 'block2/29-po-km-tm-f0.wav'},
    {'name': 'block2/29-pm-km-tm-f0.wav', 'path': 'block2/29-pm-km-tm-f0.wav'},
    {'name': 'block2/30-tmm-ko-pm-f0.wav', 'path': 'block2/30-tmm-ko-pm-f0.wav'},
    {'name': 'block2/30-tm-ko-pm-f0.wav', 'path': 'block2/30-tm-ko-pm-f0.wav'},
    {'name': 'block2/31-pe-tmm-km-f0.wav', 'path': 'block2/31-pe-tmm-km-f0.wav'},
    {'name': 'block2/31-pm-tmm-km-f0.wav', 'path': 'block2/31-pm-tmm-km-f0.wav'},
    {'name': 'block2/32-ko-to-pm-intensity.wav', 'path': 'block2/32-ko-to-pm-intensity.wav'},
    {'name': 'block2/32-km-to-pm-intensity.wav', 'path': 'block2/32-km-to-pm-intensity.wav'},
    {'name': 'block2/33-tu-pm-km-intensity.wav', 'path': 'block2/33-tu-pm-km-intensity.wav'},
    {'name': 'block2/33-tm-pm-km-intensity.wav', 'path': 'block2/33-tm-pm-km-intensity.wav'},
    {'name': 'block2/34-ka-pmm-tm-intensity.wav', 'path': 'block2/34-ka-pmm-tm-intensity.wav'},
    {'name': 'block2/34-km-pmm-tm-intensity.wav', 'path': 'block2/34-km-pmm-tm-intensity.wav'},
    {'name': 'block2/35-tmm-pa-km-intensity.wav', 'path': 'block2/35-tmm-pa-km-intensity.wav'},
    {'name': 'block2/35-tm-pa-km-intensity.wav', 'path': 'block2/35-tm-pa-km-intensity.wav'},
    {'name': 'block2/36-tm-pm-km-intensity.wav', 'path': 'block2/36-tm-pm-km-intensity.wav'},
    {'name': 'block2/36-tmm-pm-km-intensity.wav', 'path': 'block2/36-tmm-pm-km-intensity.wav'},
    {'name': 'block2/37-tm-pu-km-intensity.wav', 'path': 'block2/37-tm-pu-km-intensity.wav'},
    {'name': 'block2/37-tmm-pu-km-intensity.wav', 'path': 'block2/37-tmm-pu-km-intensity.wav'},
    {'name': 'block2/38-tm-pmm-km-f0.wav', 'path': 'block2/38-tm-pmm-km-f0.wav'},
    {'name': 'block2/38-tu-pmm-km-f0.wav', 'path': 'block2/38-tu-pmm-km-f0.wav'},
    {'name': 'block2/39-pm-ka-tm-f0.wav', 'path': 'block2/39-pm-ka-tm-f0.wav'},
    {'name': 'block2/39-pa-ka-tm-f0.wav', 'path': 'block2/39-pa-ka-tm-f0.wav'},
    {'name': 'block2/40-km-tm-pm-intensity.wav', 'path': 'block2/40-km-tm-pm-intensity.wav'},
    {'name': 'block2/40-ka-tm-pm-intensity.wav', 'path': 'block2/40-ka-tm-pm-intensity.wav'},
    {'name': 'block2/41-km-tmm-pm-intensity.wav', 'path': 'block2/41-km-tmm-pm-intensity.wav'},
    {'name': 'block2/41-ke-tmm-pm-intensity.wav', 'path': 'block2/41-ke-tmm-pm-intensity.wav'},
    {'name': 'block2/42-pm-te-km-f0.wav', 'path': 'block2/42-pm-te-km-f0.wav'},
    {'name': 'block2/42-pmm-te-km-f0.wav', 'path': 'block2/42-pmm-te-km-f0.wav'},
    {'name': 'block2/43-pm-tm-km-f0.wav', 'path': 'block2/43-pm-tm-km-f0.wav'},
    {'name': 'block2/43-pi-tm-km-f0.wav', 'path': 'block2/43-pi-tm-km-f0.wav'},
    {'name': 'block2/44-km-pe-tm-intensity.wav', 'path': 'block2/44-km-pe-tm-intensity.wav'},
    {'name': 'block2/44-ke-pe-tm-intensity.wav', 'path': 'block2/44-ke-pe-tm-intensity.wav'},
    {'name': 'conditions_block3.xlsx', 'path': 'conditions_block3.xlsx'},
    {'name': 'block3/1-tm-ku-pm-intensity.wav', 'path': 'block3/1-tm-ku-pm-intensity.wav'},
    {'name': 'block3/1-tmm-ku-pm-intensity.wav', 'path': 'block3/1-tmm-ku-pm-intensity.wav'},
    {'name': 'block3/2-tm-km-pm-intensity.wav', 'path': 'block3/2-tm-km-pm-intensity.wav'},
    {'name': 'block3/2-tu-km-pm-intensity.wav', 'path': 'block3/2-tu-km-pm-intensity.wav'},
    {'name': 'block3/3-pm-ke-tm-f0.wav', 'path': 'block3/3-pm-ke-tm-f0.wav'},
    {'name': 'block3/3-pe-ke-tm-f0.wav', 'path': 'block3/3-pe-ke-tm-f0.wav'},
    {'name': 'block3/4-km-tmm-pm-intensity.wav', 'path': 'block3/4-km-tmm-pm-intensity.wav'},
    {'name': 'block3/4-ki-tmm-pm-intensity.wav', 'path': 'block3/4-ki-tmm-pm-intensity.wav'},
    {'name': 'block3/5-pm-ki-tm-f0.wav', 'path': 'block3/5-pm-ki-tm-f0.wav'},
    {'name': 'block3/5-pmm-ki-tm-f0.wav', 'path': 'block3/5-pmm-ki-tm-f0.wav'},
    {'name': 'block3/6-tm-pm-km-f0.wav', 'path': 'block3/6-tm-pm-km-f0.wav'},
    {'name': 'block3/6-to-pm-km-f0.wav', 'path': 'block3/6-to-pm-km-f0.wav'},
    {'name': 'block3/7-pm-tmm-km-f0.wav', 'path': 'block3/7-pm-tmm-km-f0.wav'},
    {'name': 'block3/7-po-tmm-km-f0.wav', 'path': 'block3/7-po-tmm-km-f0.wav'},
    {'name': 'block3/8-km-ti-pm-intensity.wav', 'path': 'block3/8-km-ti-pm-intensity.wav'},
    {'name': 'block3/8-ki-ti-pm-intensity.wav', 'path': 'block3/8-ki-ti-pm-intensity.wav'},
    {'name': 'block3/9-km-pm-tm-intensity.wav', 'path': 'block3/9-km-pm-tm-intensity.wav'},
    {'name': 'block3/9-kmm-pm-tm-intensity.wav', 'path': 'block3/9-kmm-pm-tm-intensity.wav'},
    {'name': 'block3/10-pmm-tu-km-f0.wav', 'path': 'block3/10-pmm-tu-km-f0.wav'},
    {'name': 'block3/10-pm-tu-km-f0.wav', 'path': 'block3/10-pm-tu-km-f0.wav'},
    {'name': 'block3/11-te-kmm-pm-intensity.wav', 'path': 'block3/11-te-kmm-pm-intensity.wav'},
    {'name': 'block3/11-tm-kmm-pm-intensity.wav', 'path': 'block3/11-tm-kmm-pm-intensity.wav'},
    {'name': 'block3/12-ke-pm-tm-intensity.wav', 'path': 'block3/12-ke-pm-tm-intensity.wav'},
    {'name': 'block3/12-km-pm-tm-intensity.wav', 'path': 'block3/12-km-pm-tm-intensity.wav'},
    {'name': 'block3/13-pi-ki-tm-f0.wav', 'path': 'block3/13-pi-ki-tm-f0.wav'},
    {'name': 'block3/13-pm-ki-tm-f0.wav', 'path': 'block3/13-pm-ki-tm-f0.wav'},
    {'name': 'block3/14-tmm-ko-pm-intensity.wav', 'path': 'block3/14-tmm-ko-pm-intensity.wav'},
    {'name': 'block3/14-tm-ko-pm-intensity.wav', 'path': 'block3/14-tm-ko-pm-intensity.wav'},
    {'name': 'block3/15-pa-kmm-tm-f0.wav', 'path': 'block3/15-pa-kmm-tm-f0.wav'},
    {'name': 'block3/15-pm-kmm-tm-f0.wav', 'path': 'block3/15-pm-kmm-tm-f0.wav'},
    {'name': 'block3/16-pu-tm-km-f0.wav', 'path': 'block3/16-pu-tm-km-f0.wav'},
    {'name': 'block3/16-pm-tm-km-f0.wav', 'path': 'block3/16-pm-tm-km-f0.wav'},
    {'name': 'block3/17-to-ko-pm-intensity.wav', 'path': 'block3/17-to-ko-pm-intensity.wav'},
    {'name': 'block3/17-tm-ko-pm-intensity.wav', 'path': 'block3/17-tm-ko-pm-intensity.wav'},
    {'name': 'block3/18-tm-km-pm-f0.wav', 'path': 'block3/18-tm-km-pm-f0.wav'},
    {'name': 'block3/18-tmm-km-pm-f0.wav', 'path': 'block3/18-tmm-km-pm-f0.wav'},
    {'name': 'block3/19-tm-pm-km-f0.wav', 'path': 'block3/19-tm-pm-km-f0.wav'},
    {'name': 'block3/19-te-pm-km-f0.wav', 'path': 'block3/19-te-pm-km-f0.wav'},
    {'name': 'block3/20-km-ta-pm-intensity.wav', 'path': 'block3/20-km-ta-pm-intensity.wav'},
    {'name': 'block3/20-kmm-ta-pm-intensity.wav', 'path': 'block3/20-kmm-ta-pm-intensity.wav'},
    {'name': 'block3/21-pm-ta-km-f0.wav', 'path': 'block3/21-pm-ta-km-f0.wav'},
    {'name': 'block3/21-pa-ta-km-f0.wav', 'path': 'block3/21-pa-ta-km-f0.wav'},
    {'name': 'block3/22-tm-pmm-km-f0.wav', 'path': 'block3/22-tm-pmm-km-f0.wav'},
    {'name': 'block3/22-te-pmm-km-f0.wav', 'path': 'block3/22-te-pmm-km-f0.wav'},
    {'name': 'block3/23-pm-km-tm-intensity.wav', 'path': 'block3/23-pm-km-tm-intensity.wav'},
    {'name': 'block3/23-pa-km-tm-intensity.wav', 'path': 'block3/23-pa-km-tm-intensity.wav'},
    {'name': 'block3/24-km-pe-tm-intensity.wav', 'path': 'block3/24-km-pe-tm-intensity.wav'},
    {'name': 'block3/24-ke-pe-tm-intensity.wav', 'path': 'block3/24-ke-pe-tm-intensity.wav'},
    {'name': 'block3/25-km-tmm-pm-intensity.wav', 'path': 'block3/25-km-tmm-pm-intensity.wav'},
    {'name': 'block3/25-ko-tmm-pm-intensity.wav', 'path': 'block3/25-ko-tmm-pm-intensity.wav'},
    {'name': 'block3/26-km-pe-tm-f0.wav', 'path': 'block3/26-km-pe-tm-f0.wav'},
    {'name': 'block3/26-kmm-pe-tm-f0.wav', 'path': 'block3/26-kmm-pe-tm-f0.wav'},
    {'name': 'block3/27-km-tmm-pm-intensity.wav', 'path': 'block3/27-km-tmm-pm-intensity.wav'},
    {'name': 'block3/27-kmm-tmm-pm-intensity.wav', 'path': 'block3/27-kmm-tmm-pm-intensity.wav'},
    {'name': 'block3/28-tu-kmm-pm-intensity.wav', 'path': 'block3/28-tu-kmm-pm-intensity.wav'},
    {'name': 'block3/28-tm-kmm-pm-intensity.wav', 'path': 'block3/28-tm-kmm-pm-intensity.wav'},
    {'name': 'block3/29-tu-pu-km-f0.wav', 'path': 'block3/29-tu-pu-km-f0.wav'},
    {'name': 'block3/29-tm-pu-km-f0.wav', 'path': 'block3/29-tm-pu-km-f0.wav'},
    {'name': 'block3/30-pa-km-tm-f0.wav', 'path': 'block3/30-pa-km-tm-f0.wav'},
    {'name': 'block3/30-pm-km-tm-f0.wav', 'path': 'block3/30-pm-km-tm-f0.wav'},
    {'name': 'block3/31-tmm-pi-km-intensity.wav', 'path': 'block3/31-tmm-pi-km-intensity.wav'},
    {'name': 'block3/31-tm-pi-km-intensity.wav', 'path': 'block3/31-tm-pi-km-intensity.wav'},
    {'name': 'block3/32-ki-pmm-tm-f0.wav', 'path': 'block3/32-ki-pmm-tm-f0.wav'},
    {'name': 'block3/32-km-pmm-tm-f0.wav', 'path': 'block3/32-km-pmm-tm-f0.wav'},
    {'name': 'block3/33-ka-ta-pm-intensity.wav', 'path': 'block3/33-ka-ta-pm-intensity.wav'},
    {'name': 'block3/33-km-ta-pm-intensity.wav', 'path': 'block3/33-km-ta-pm-intensity.wav'},
    {'name': 'block3/34-tmm-pa-km-f0.wav', 'path': 'block3/34-tmm-pa-km-f0.wav'},
    {'name': 'block3/34-tm-pa-km-f0.wav', 'path': 'block3/34-tm-pa-km-f0.wav'},
    {'name': 'block3/35-ki-tm-pm-intensity.wav', 'path': 'block3/35-ki-tm-pm-intensity.wav'},
    {'name': 'block3/35-km-tm-pm-intensity.wav', 'path': 'block3/35-km-tm-pm-intensity.wav'},
    {'name': 'block3/36-pm-kmm-tm-f0.wav', 'path': 'block3/36-pm-kmm-tm-f0.wav'},
    {'name': 'block3/36-pmm-kmm-tm-f0.wav', 'path': 'block3/36-pmm-kmm-tm-f0.wav'},
    {'name': 'block3/37-pm-to-km-f0.wav', 'path': 'block3/37-pm-to-km-f0.wav'},
    {'name': 'block3/37-po-to-km-f0.wav', 'path': 'block3/37-po-to-km-f0.wav'},
    {'name': 'block3/38-tm-pmm-km-intensity.wav', 'path': 'block3/38-tm-pmm-km-intensity.wav'},
    {'name': 'block3/38-ta-pmm-km-intensity.wav', 'path': 'block3/38-ta-pmm-km-intensity.wav'},
    {'name': 'block3/39-km-pm-tm-f0.wav', 'path': 'block3/39-km-pm-tm-f0.wav'},
    {'name': 'block3/39-ki-pm-tm-f0.wav', 'path': 'block3/39-ki-pm-tm-f0.wav'},
    {'name': 'block3/40-pm-ko-tm-f0.wav', 'path': 'block3/40-pm-ko-tm-f0.wav'},
    {'name': 'block3/40-pmm-ko-tm-f0.wav', 'path': 'block3/40-pmm-ko-tm-f0.wav'},
    {'name': 'block3/41-km-pu-tm-intensity.wav', 'path': 'block3/41-km-pu-tm-intensity.wav'},
    {'name': 'block3/41-ku-pu-tm-intensity.wav', 'path': 'block3/41-ku-pu-tm-intensity.wav'},
    {'name': 'block3/42-km-tm-pm-intensity.wav', 'path': 'block3/42-km-tm-pm-intensity.wav'},
    {'name': 'block3/42-ko-tm-pm-intensity.wav', 'path': 'block3/42-ko-tm-pm-intensity.wav'},
    {'name': 'block3/43-pm-tmm-km-f0.wav', 'path': 'block3/43-pm-tmm-km-f0.wav'},
    {'name': 'block3/43-pu-tmm-km-f0.wav', 'path': 'block3/43-pu-tmm-km-f0.wav'},
    {'name': 'block3/44-km-pe-tm-intensity.wav', 'path': 'block3/44-km-pe-tm-intensity.wav'},
    {'name': 'block3/44-kmm-pe-tm-intensity.wav', 'path': 'block3/44-kmm-pe-tm-intensity.wav'},
    {'name': 'conditions_block4.xlsx', 'path': 'conditions_block4.xlsx'},
    {'name': 'block4/1-pm-kmm-tm-intensity.wav', 'path': 'block4/1-pm-kmm-tm-intensity.wav'},
    {'name': 'block4/1-pu-kmm-tm-intensity.wav', 'path': 'block4/1-pu-kmm-tm-intensity.wav'},
    {'name': 'block4/2-tmm-pe-km-intensity.wav', 'path': 'block4/2-tmm-pe-km-intensity.wav'},
    {'name': 'block4/2-tm-pe-km-intensity.wav', 'path': 'block4/2-tm-pe-km-intensity.wav'},
    {'name': 'block4/3-pm-ti-km-intensity.wav', 'path': 'block4/3-pm-ti-km-intensity.wav'},
    {'name': 'block4/3-pi-ti-km-intensity.wav', 'path': 'block4/3-pi-ti-km-intensity.wav'},
    {'name': 'block4/4-km-tm-pm-f0.wav', 'path': 'block4/4-km-tm-pm-f0.wav'},
    {'name': 'block4/4-ka-tm-pm-f0.wav', 'path': 'block4/4-ka-tm-pm-f0.wav'},
    {'name': 'block4/5-tm-kmm-pm-f0.wav', 'path': 'block4/5-tm-kmm-pm-f0.wav'},
    {'name': 'block4/5-to-kmm-pm-f0.wav', 'path': 'block4/5-to-kmm-pm-f0.wav'},
    {'name': 'block4/6-pm-tm-km-intensity.wav', 'path': 'block4/6-pm-tm-km-intensity.wav'},
    {'name': 'block4/6-pe-tm-km-intensity.wav', 'path': 'block4/6-pe-tm-km-intensity.wav'},
    {'name': 'block4/7-kmm-to-pm-f0.wav', 'path': 'block4/7-kmm-to-pm-f0.wav'},
    {'name': 'block4/7-km-to-pm-f0.wav', 'path': 'block4/7-km-to-pm-f0.wav'},
    {'name': 'block4/8-km-po-tm-f0.wav', 'path': 'block4/8-km-po-tm-f0.wav'},
    {'name': 'block4/8-ko-po-tm-f0.wav', 'path': 'block4/8-ko-po-tm-f0.wav'},
    {'name': 'block4/9-pm-tmm-km-intensity.wav', 'path': 'block4/9-pm-tmm-km-intensity.wav'},
    {'name': 'block4/9-pmm-tmm-km-intensity.wav', 'path': 'block4/9-pmm-tmm-km-intensity.wav'},
    {'name': 'block4/10-pm-ke-tm-f0.wav', 'path': 'block4/10-pm-ke-tm-f0.wav'},
    {'name': 'block4/10-pmm-ke-tm-f0.wav', 'path': 'block4/10-pmm-ke-tm-f0.wav'},
    {'name': 'block4/11-pu-ku-tm-intensity.wav', 'path': 'block4/11-pu-ku-tm-intensity.wav'},
    {'name': 'block4/11-pm-ku-tm-intensity.wav', 'path': 'block4/11-pm-ku-tm-intensity.wav'},
    {'name': 'block4/12-ke-tmm-pm-f0.wav', 'path': 'block4/12-ke-tmm-pm-f0.wav'},
    {'name': 'block4/12-km-tmm-pm-f0.wav', 'path': 'block4/12-km-tmm-pm-f0.wav'},
    {'name': 'block4/13-ku-tm-pm-f0.wav', 'path': 'block4/13-ku-tm-pm-f0.wav'},
    {'name': 'block4/13-km-tm-pm-f0.wav', 'path': 'block4/13-km-tm-pm-f0.wav'},
    {'name': 'block4/14-ke-te-pm-f0.wav', 'path': 'block4/14-ke-te-pm-f0.wav'},
    {'name': 'block4/14-km-te-pm-f0.wav', 'path': 'block4/14-km-te-pm-f0.wav'},
    {'name': 'block4/15-ti-pmm-km-intensity.wav', 'path': 'block4/15-ti-pmm-km-intensity.wav'},
    {'name': 'block4/15-tm-pmm-km-intensity.wav', 'path': 'block4/15-tm-pmm-km-intensity.wav'},
    {'name': 'block4/16-km-pa-tm-intensity.wav', 'path': 'block4/16-km-pa-tm-intensity.wav'},
    {'name': 'block4/16-kmm-pa-tm-intensity.wav', 'path': 'block4/16-kmm-pa-tm-intensity.wav'},
    {'name': 'block4/17-pi-km-tm-intensity.wav', 'path': 'block4/17-pi-km-tm-intensity.wav'},
    {'name': 'block4/17-pm-km-tm-intensity.wav', 'path': 'block4/17-pm-km-tm-intensity.wav'},
    {'name': 'block4/18-tm-pmm-km-f0.wav', 'path': 'block4/18-tm-pmm-km-f0.wav'},
    {'name': 'block4/18-tmm-pmm-km-f0.wav', 'path': 'block4/18-tmm-pmm-km-f0.wav'},
    {'name': 'block4/19-pm-te-km-intensity.wav', 'path': 'block4/19-pm-te-km-intensity.wav'},
    {'name': 'block4/19-pe-te-km-intensity.wav', 'path': 'block4/19-pe-te-km-intensity.wav'},
    {'name': 'block4/20-tm-km-pm-intensity.wav', 'path': 'block4/20-tm-km-pm-intensity.wav'},
    {'name': 'block4/20-to-km-pm-intensity.wav', 'path': 'block4/20-to-km-pm-intensity.wav'},
    {'name': 'block4/21-km-pmm-tm-f0.wav', 'path': 'block4/21-km-pmm-tm-f0.wav'},
    {'name': 'block4/21-ku-pmm-tm-f0.wav', 'path': 'block4/21-ku-pmm-tm-f0.wav'},
    {'name': 'block4/22-tmm-ku-pm-f0.wav', 'path': 'block4/22-tmm-ku-pm-f0.wav'},
    {'name': 'block4/22-tm-ku-pm-f0.wav', 'path': 'block4/22-tm-ku-pm-f0.wav'},
    {'name': 'block4/23-tm-pi-km-f0.wav', 'path': 'block4/23-tm-pi-km-f0.wav'},
    {'name': 'block4/23-ti-pi-km-f0.wav', 'path': 'block4/23-ti-pi-km-f0.wav'},
    {'name': 'block4/24-tm-pmm-km-intensity.wav', 'path': 'block4/24-tm-pmm-km-intensity.wav'},
    {'name': 'block4/24-te-pmm-km-intensity.wav', 'path': 'block4/24-te-pmm-km-intensity.wav'},
    {'name': 'block4/25-tm-pm-km-f0.wav', 'path': 'block4/25-tm-pm-km-f0.wav'},
    {'name': 'block4/25-ti-pm-km-f0.wav', 'path': 'block4/25-ti-pm-km-f0.wav'},
    {'name': 'block4/26-pmm-ti-km-intensity.wav', 'path': 'block4/26-pmm-ti-km-intensity.wav'},
    {'name': 'block4/26-pm-ti-km-intensity.wav', 'path': 'block4/26-pm-ti-km-intensity.wav'},
    {'name': 'block4/27-pm-km-tm-intensity.wav', 'path': 'block4/27-pm-km-tm-intensity.wav'},
    {'name': 'block4/27-pmm-km-tm-intensity.wav', 'path': 'block4/27-pmm-km-tm-intensity.wav'},
    {'name': 'block4/28-ka-tmm-pm-f0.wav', 'path': 'block4/28-ka-tmm-pm-f0.wav'},
    {'name': 'block4/28-km-tmm-pm-f0.wav', 'path': 'block4/28-km-tmm-pm-f0.wav'},
    {'name': 'block4/29-pm-to-km-intensity.wav', 'path': 'block4/29-pm-to-km-intensity.wav'},
    {'name': 'block4/29-pmm-to-km-intensity.wav', 'path': 'block4/29-pmm-to-km-intensity.wav'},
    {'name': 'block4/30-ku-pu-tm-f0.wav', 'path': 'block4/30-ku-pu-tm-f0.wav'},
    {'name': 'block4/30-km-pu-tm-f0.wav', 'path': 'block4/30-km-pu-tm-f0.wav'},
    {'name': 'block4/31-ta-pm-km-intensity.wav', 'path': 'block4/31-ta-pm-km-intensity.wav'},
    {'name': 'block4/31-tm-pm-km-intensity.wav', 'path': 'block4/31-tm-pm-km-intensity.wav'},
    {'name': 'block4/32-po-tmm-km-intensity.wav', 'path': 'block4/32-po-tmm-km-intensity.wav'},
    {'name': 'block4/32-pm-tmm-km-intensity.wav', 'path': 'block4/32-pm-tmm-km-intensity.wav'},
    {'name': 'block4/33-pa-ka-tm-intensity.wav', 'path': 'block4/33-pa-ka-tm-intensity.wav'},
    {'name': 'block4/33-pm-ka-tm-intensity.wav', 'path': 'block4/33-pm-ka-tm-intensity.wav'},
    {'name': 'block4/34-km-pi-tm-f0.wav', 'path': 'block4/34-km-pi-tm-f0.wav'},
    {'name': 'block4/34-kmm-pi-tm-f0.wav', 'path': 'block4/34-kmm-pi-tm-f0.wav'},
    {'name': 'block4/35-ko-pm-tm-f0.wav', 'path': 'block4/35-ko-pm-tm-f0.wav'},
    {'name': 'block4/35-km-pm-tm-f0.wav', 'path': 'block4/35-km-pm-tm-f0.wav'},
    {'name': 'block4/36-km-tm-pm-f0.wav', 'path': 'block4/36-km-tm-pm-f0.wav'},
    {'name': 'block4/36-kmm-tm-pm-f0.wav', 'path': 'block4/36-kmm-tm-pm-f0.wav'},
    {'name': 'block4/37-pm-km-tm-f0.wav', 'path': 'block4/37-pm-km-tm-f0.wav'},
    {'name': 'block4/37-pe-km-tm-f0.wav', 'path': 'block4/37-pe-km-tm-f0.wav'},
    {'name': 'block4/38-tm-ko-pm-intensity.wav', 'path': 'block4/38-tm-ko-pm-intensity.wav'},
    {'name': 'block4/38-to-ko-pm-intensity.wav', 'path': 'block4/38-to-ko-pm-intensity.wav'},
    {'name': 'block4/39-kmm-tu-pm-intensity.wav', 'path': 'block4/39-kmm-tu-pm-intensity.wav'},
    {'name': 'block4/39-km-tu-pm-intensity.wav', 'path': 'block4/39-km-tu-pm-intensity.wav'},
    {'name': 'block4/40-tm-kmm-pm-f0.wav', 'path': 'block4/40-tm-kmm-pm-f0.wav'},
    {'name': 'block4/40-ti-kmm-pm-f0.wav', 'path': 'block4/40-ti-kmm-pm-f0.wav'},
    {'name': 'block4/41-km-pm-tm-intensity.wav', 'path': 'block4/41-km-pm-tm-intensity.wav'},
    {'name': 'block4/41-ku-pm-tm-intensity.wav', 'path': 'block4/41-ku-pm-tm-intensity.wav'},
    {'name': 'block4/42-tmm-ka-pm-f0.wav', 'path': 'block4/42-tmm-ka-pm-f0.wav'},
    {'name': 'block4/42-tm-ka-pm-f0.wav', 'path': 'block4/42-tm-ka-pm-f0.wav'},
    {'name': 'block4/43-pm-tmm-km-intensity.wav', 'path': 'block4/43-pm-tmm-km-intensity.wav'},
    {'name': 'block4/43-pa-tmm-km-intensity.wav', 'path': 'block4/43-pa-tmm-km-intensity.wav'},
    {'name': 'block4/44-km-ta-pm-f0.wav', 'path': 'block4/44-km-ta-pm-f0.wav'},
    {'name': 'block4/44-ka-ta-pm-f0.wav', 'path': 'block4/44-ka-ta-pm-f0.wav'},
    {'name': 'conditions_block5.xlsx', 'path': 'conditions_block5.xlsx'},
    {'name': 'block5/1-pmm-ka-tm-intensity.wav', 'path': 'block5/1-pmm-ka-tm-intensity.wav'},
    {'name': 'block5/1-pm-ka-tm-intensity.wav', 'path': 'block5/1-pm-ka-tm-intensity.wav'},
    {'name': 'block5/2-km-to-pm-f0.wav', 'path': 'block5/2-km-to-pm-f0.wav'},
    {'name': 'block5/2-ko-to-pm-f0.wav', 'path': 'block5/2-ko-to-pm-f0.wav'},
    {'name': 'block5/3-pm-tm-km-intensity.wav', 'path': 'block5/3-pm-tm-km-intensity.wav'},
    {'name': 'block5/3-pi-tm-km-intensity.wav', 'path': 'block5/3-pi-tm-km-intensity.wav'},
    {'name': 'block5/4-km-tmm-pm-f0.wav', 'path': 'block5/4-km-tmm-pm-f0.wav'},
    {'name': 'block5/4-ku-tmm-pm-f0.wav', 'path': 'block5/4-ku-tmm-pm-f0.wav'},
    {'name': 'block5/5-tmm-pu-km-f0.wav', 'path': 'block5/5-tmm-pu-km-f0.wav'},
    {'name': 'block5/5-tm-pu-km-f0.wav', 'path': 'block5/5-tm-pu-km-f0.wav'},
    {'name': 'block5/6-km-tm-pm-f0.wav', 'path': 'block5/6-km-tm-pm-f0.wav'},
    {'name': 'block5/6-ka-tm-pm-f0.wav', 'path': 'block5/6-ka-tm-pm-f0.wav'},
    {'name': 'block5/7-pm-ka-tm-intensity.wav', 'path': 'block5/7-pm-ka-tm-intensity.wav'},
    {'name': 'block5/7-pa-ka-tm-intensity.wav', 'path': 'block5/7-pa-ka-tm-intensity.wav'},
    {'name': 'block5/8-tm-pmm-km-intensity.wav', 'path': 'block5/8-tm-pmm-km-intensity.wav'},
    {'name': 'block5/8-to-pmm-km-intensity.wav', 'path': 'block5/8-to-pmm-km-intensity.wav'},
    {'name': 'block5/9-tm-pm-km-f0.wav', 'path': 'block5/9-tm-pm-km-f0.wav'},
    {'name': 'block5/9-tmm-pm-km-f0.wav', 'path': 'block5/9-tmm-pm-km-f0.wav'},
    {'name': 'block5/10-po-to-km-intensity.wav', 'path': 'block5/10-po-to-km-intensity.wav'},
    {'name': 'block5/10-pm-to-km-intensity.wav', 'path': 'block5/10-pm-to-km-intensity.wav'},
    {'name': 'block5/11-tu-pmm-km-intensity.wav', 'path': 'block5/11-tu-pmm-km-intensity.wav'},
    {'name': 'block5/11-tm-pmm-km-intensity.wav', 'path': 'block5/11-tm-pmm-km-intensity.wav'},
    {'name': 'block5/12-km-po-tm-f0.wav', 'path': 'block5/12-km-po-tm-f0.wav'},
    {'name': 'block5/12-kmm-po-tm-f0.wav', 'path': 'block5/12-kmm-po-tm-f0.wav'},
    {'name': 'block5/13-pu-km-tm-intensity.wav', 'path': 'block5/13-pu-km-tm-intensity.wav'},
    {'name': 'block5/13-pm-km-tm-intensity.wav', 'path': 'block5/13-pm-km-tm-intensity.wav'},
    {'name': 'block5/14-ki-pi-tm-f0.wav', 'path': 'block5/14-ki-pi-tm-f0.wav'},
    {'name': 'block5/14-km-pi-tm-f0.wav', 'path': 'block5/14-km-pi-tm-f0.wav'},
    {'name': 'block5/15-pm-ku-tm-intensity.wav', 'path': 'block5/15-pm-ku-tm-intensity.wav'},
    {'name': 'block5/15-pmm-ku-tm-intensity.wav', 'path': 'block5/15-pmm-ku-tm-intensity.wav'},
    {'name': 'block5/16-ka-pmm-tm-f0.wav', 'path': 'block5/16-ka-pmm-tm-f0.wav'},
    {'name': 'block5/16-km-pmm-tm-f0.wav', 'path': 'block5/16-km-pmm-tm-f0.wav'},
    {'name': 'block5/17-to-pm-km-f0.wav', 'path': 'block5/17-to-pm-km-f0.wav'},
    {'name': 'block5/17-tm-pm-km-f0.wav', 'path': 'block5/17-tm-pm-km-f0.wav'},
    {'name': 'block5/18-pm-tm-km-intensity.wav', 'path': 'block5/18-pm-tm-km-intensity.wav'},
    {'name': 'block5/18-pmm-tm-km-intensity.wav', 'path': 'block5/18-pmm-tm-km-intensity.wav'},
    {'name': 'block5/19-km-tu-pm-f0.wav', 'path': 'block5/19-km-tu-pm-f0.wav'},
    {'name': 'block5/19-ku-tu-pm-f0.wav', 'path': 'block5/19-ku-tu-pm-f0.wav'},
    {'name': 'block5/20-km-pm-tm-intensity.wav', 'path': 'block5/20-km-pm-tm-intensity.wav'},
    {'name': 'block5/20-ka-pm-tm-intensity.wav', 'path': 'block5/20-ka-pm-tm-intensity.wav'},
    {'name': 'block5/21-pm-kmm-tm-f0.wav', 'path': 'block5/21-pm-kmm-tm-f0.wav'},
    {'name': 'block5/21-pi-kmm-tm-f0.wav', 'path': 'block5/21-pi-kmm-tm-f0.wav'},
    {'name': 'block5/22-pmm-te-km-intensity.wav', 'path': 'block5/22-pmm-te-km-intensity.wav'},
    {'name': 'block5/22-pm-te-km-intensity.wav', 'path': 'block5/22-pm-te-km-intensity.wav'},
    {'name': 'block5/23-pm-ke-tm-intensity.wav', 'path': 'block5/23-pm-ke-tm-intensity.wav'},
    {'name': 'block5/23-pe-ke-tm-intensity.wav', 'path': 'block5/23-pe-ke-tm-intensity.wav'},
    {'name': 'block5/24-km-tm-pm-f0.wav', 'path': 'block5/24-km-tm-pm-f0.wav'},
    {'name': 'block5/24-ke-tm-pm-f0.wav', 'path': 'block5/24-ke-tm-pm-f0.wav'},
    {'name': 'block5/25-kmm-ti-pm-f0.wav', 'path': 'block5/25-kmm-ti-pm-f0.wav'},
    {'name': 'block5/25-km-ti-pm-f0.wav', 'path': 'block5/25-km-ti-pm-f0.wav'},
    {'name': 'block5/26-pm-tmm-km-intensity.wav', 'path': 'block5/26-pm-tmm-km-intensity.wav'},
    {'name': 'block5/26-pe-tmm-km-intensity.wav', 'path': 'block5/26-pe-tmm-km-intensity.wav'},
    {'name': 'block5/27-km-pmm-tm-f0.wav', 'path': 'block5/27-km-pmm-tm-f0.wav'},
    {'name': 'block5/27-kmm-pmm-tm-f0.wav', 'path': 'block5/27-kmm-pmm-tm-f0.wav'},
    {'name': 'block5/28-to-kmm-pm-f0.wav', 'path': 'block5/28-to-kmm-pm-f0.wav'},
    {'name': 'block5/28-tm-kmm-pm-f0.wav', 'path': 'block5/28-tm-kmm-pm-f0.wav'},
    {'name': 'block5/29-pu-tu-km-intensity.wav', 'path': 'block5/29-pu-tu-km-intensity.wav'},
    {'name': 'block5/29-pm-tu-km-intensity.wav', 'path': 'block5/29-pm-tu-km-intensity.wav'},
    {'name': 'block5/30-tu-pm-km-f0.wav', 'path': 'block5/30-tu-pm-km-f0.wav'},
    {'name': 'block5/30-tm-pm-km-f0.wav', 'path': 'block5/30-tm-pm-km-f0.wav'},
    {'name': 'block5/31-km-pe-tm-f0.wav', 'path': 'block5/31-km-pe-tm-f0.wav'},
    {'name': 'block5/31-kmm-pe-tm-f0.wav', 'path': 'block5/31-kmm-pe-tm-f0.wav'},
    {'name': 'block5/32-pi-tmm-km-intensity.wav', 'path': 'block5/32-pi-tmm-km-intensity.wav'},
    {'name': 'block5/32-pm-tmm-km-intensity.wav', 'path': 'block5/32-pm-tmm-km-intensity.wav'},
    {'name': 'block5/33-po-km-tm-intensity.wav', 'path': 'block5/33-po-km-tm-intensity.wav'},
    {'name': 'block5/33-pm-km-tm-intensity.wav', 'path': 'block5/33-pm-km-tm-intensity.wav'},
    {'name': 'block5/34-ta-ka-pm-f0.wav', 'path': 'block5/34-ta-ka-pm-f0.wav'},
    {'name': 'block5/34-tm-ka-pm-f0.wav', 'path': 'block5/34-tm-ka-pm-f0.wav'},
    {'name': 'block5/35-tm-ki-pm-intensity.wav', 'path': 'block5/35-tm-ki-pm-intensity.wav'},
    {'name': 'block5/35-tmm-ki-pm-intensity.wav', 'path': 'block5/35-tmm-ki-pm-intensity.wav'},
    {'name': 'block5/36-tm-kmm-pm-intensity.wav', 'path': 'block5/36-tm-kmm-pm-intensity.wav'},
    {'name': 'block5/36-tmm-kmm-pm-intensity.wav', 'path': 'block5/36-tmm-kmm-pm-intensity.wav'},
    {'name': 'block5/37-tmm-pa-km-f0.wav', 'path': 'block5/37-tmm-pa-km-f0.wav'},
    {'name': 'block5/37-tm-pa-km-f0.wav', 'path': 'block5/37-tm-pa-km-f0.wav'},
    {'name': 'block5/38-km-pm-tm-f0.wav', 'path': 'block5/38-km-pm-tm-f0.wav'},
    {'name': 'block5/38-ki-pm-tm-f0.wav', 'path': 'block5/38-ki-pm-tm-f0.wav'},
    {'name': 'block5/39-tm-pi-km-intensity.wav', 'path': 'block5/39-tm-pi-km-intensity.wav'},
    {'name': 'block5/39-ti-pi-km-intensity.wav', 'path': 'block5/39-ti-pi-km-intensity.wav'},
    {'name': 'block5/40-km-tmm-pm-f0.wav', 'path': 'block5/40-km-tmm-pm-f0.wav'},
    {'name': 'block5/40-ke-tmm-pm-f0.wav', 'path': 'block5/40-ke-tmm-pm-f0.wav'},
    {'name': 'block5/41-tmm-ko-pm-intensity.wav', 'path': 'block5/41-tmm-ko-pm-intensity.wav'},
    {'name': 'block5/41-tm-ko-pm-intensity.wav', 'path': 'block5/41-tm-ko-pm-intensity.wav'},
    {'name': 'block5/42-tm-km-pm-intensity.wav', 'path': 'block5/42-tm-km-pm-intensity.wav'},
    {'name': 'block5/42-te-km-pm-intensity.wav', 'path': 'block5/42-te-km-pm-intensity.wav'},
    {'name': 'block5/43-tm-kmm-pm-intensity.wav', 'path': 'block5/43-tm-kmm-pm-intensity.wav'},
    {'name': 'block5/43-ta-kmm-pm-intensity.wav', 'path': 'block5/43-ta-kmm-pm-intensity.wav'},
    {'name': 'block5/44-km-pe-tm-f0.wav', 'path': 'block5/44-km-pe-tm-f0.wav'},
    {'name': 'block5/44-ke-pe-tm-f0.wav', 'path': 'block5/44-ke-pe-tm-f0.wav'},
    {'name': 'conditions_block6.xlsx', 'path': 'conditions_block6.xlsx'},
    {'name': 'block6/1-tm-kmm-pm-f0.wav', 'path': 'block6/1-tm-kmm-pm-f0.wav'},
    {'name': 'block6/1-te-kmm-pm-f0.wav', 'path': 'block6/1-te-kmm-pm-f0.wav'},
    {'name': 'block6/2-tm-pm-km-intensity.wav', 'path': 'block6/2-tm-pm-km-intensity.wav'},
    {'name': 'block6/2-te-pm-km-intensity.wav', 'path': 'block6/2-te-pm-km-intensity.wav'},
    {'name': 'block6/3-tm-ko-pm-f0.wav', 'path': 'block6/3-tm-ko-pm-f0.wav'},
    {'name': 'block6/3-tmm-ko-pm-f0.wav', 'path': 'block6/3-tmm-ko-pm-f0.wav'},
    {'name': 'block6/4-km-ta-pm-f0.wav', 'path': 'block6/4-km-ta-pm-f0.wav'},
    {'name': 'block6/4-ka-ta-pm-f0.wav', 'path': 'block6/4-ka-ta-pm-f0.wav'},
    {'name': 'block6/5-km-pmm-tm-intensity.wav', 'path': 'block6/5-km-pmm-tm-intensity.wav'},
    {'name': 'block6/5-ki-pmm-tm-intensity.wav', 'path': 'block6/5-ki-pmm-tm-intensity.wav'},
    {'name': 'block6/6-tm-pa-km-intensity.wav', 'path': 'block6/6-tm-pa-km-intensity.wav'},
    {'name': 'block6/6-tmm-pa-km-intensity.wav', 'path': 'block6/6-tmm-pa-km-intensity.wav'},
    {'name': 'block6/7-km-tm-pm-f0.wav', 'path': 'block6/7-km-tm-pm-f0.wav'},
    {'name': 'block6/7-ki-tm-pm-f0.wav', 'path': 'block6/7-ki-tm-pm-f0.wav'},
    {'name': 'block6/8-pm-ke-tm-intensity.wav', 'path': 'block6/8-pm-ke-tm-intensity.wav'},
    {'name': 'block6/8-pe-ke-tm-intensity.wav', 'path': 'block6/8-pe-ke-tm-intensity.wav'},
    {'name': 'block6/9-km-tmm-pm-f0.wav', 'path': 'block6/9-km-tmm-pm-f0.wav'},
    {'name': 'block6/9-kmm-tmm-pm-f0.wav', 'path': 'block6/9-kmm-tmm-pm-f0.wav'},
    {'name': 'block6/10-ke-pm-tm-f0.wav', 'path': 'block6/10-ke-pm-tm-f0.wav'},
    {'name': 'block6/10-km-pm-tm-f0.wav', 'path': 'block6/10-km-pm-tm-f0.wav'},
    {'name': 'block6/11-ke-pe-tm-f0.wav', 'path': 'block6/11-ke-pe-tm-f0.wav'},
    {'name': 'block6/11-km-pe-tm-f0.wav', 'path': 'block6/11-km-pe-tm-f0.wav'},
    {'name': 'block6/12-tu-kmm-pm-f0.wav', 'path': 'block6/12-tu-kmm-pm-f0.wav'},
    {'name': 'block6/12-tm-kmm-pm-f0.wav', 'path': 'block6/12-tm-kmm-pm-f0.wav'},
    {'name': 'block6/13-to-pm-km-intensity.wav', 'path': 'block6/13-to-pm-km-intensity.wav'},
    {'name': 'block6/13-tm-pm-km-intensity.wav', 'path': 'block6/13-tm-pm-km-intensity.wav'},
    {'name': 'block6/14-kmm-pe-tm-f0.wav', 'path': 'block6/14-kmm-pe-tm-f0.wav'},
    {'name': 'block6/14-km-pe-tm-f0.wav', 'path': 'block6/14-km-pe-tm-f0.wav'},
    {'name': 'block6/15-pa-kmm-tm-intensity.wav', 'path': 'block6/15-pa-kmm-tm-intensity.wav'},
    {'name': 'block6/15-pm-kmm-tm-intensity.wav', 'path': 'block6/15-pm-kmm-tm-intensity.wav'},
    {'name': 'block6/16-pmm-ki-tm-intensity.wav', 'path': 'block6/16-pmm-ki-tm-intensity.wav'},
    {'name': 'block6/16-pm-ki-tm-intensity.wav', 'path': 'block6/16-pm-ki-tm-intensity.wav'},
    {'name': 'block6/17-tu-pu-km-intensity.wav', 'path': 'block6/17-tu-pu-km-intensity.wav'},
    {'name': 'block6/17-tm-pu-km-intensity.wav', 'path': 'block6/17-tm-pu-km-intensity.wav'},
    {'name': 'block6/18-km-pm-tm-f0.wav', 'path': 'block6/18-km-pm-tm-f0.wav'},
    {'name': 'block6/18-kmm-pm-tm-f0.wav', 'path': 'block6/18-kmm-pm-tm-f0.wav'},
    {'name': 'block6/19-tm-km-pm-f0.wav', 'path': 'block6/19-tm-km-pm-f0.wav'},
    {'name': 'block6/19-tu-km-pm-f0.wav', 'path': 'block6/19-tu-km-pm-f0.wav'},
    {'name': 'block6/20-tm-pmm-km-intensity.wav', 'path': 'block6/20-tm-pmm-km-intensity.wav'},
    {'name': 'block6/20-te-pmm-km-intensity.wav', 'path': 'block6/20-te-pmm-km-intensity.wav'},
    {'name': 'block6/21-tm-ku-pm-f0.wav', 'path': 'block6/21-tm-ku-pm-f0.wav'},
    {'name': 'block6/21-tmm-ku-pm-f0.wav', 'path': 'block6/21-tmm-ku-pm-f0.wav'},
    {'name': 'block6/22-pm-to-km-intensity.wav', 'path': 'block6/22-pm-to-km-intensity.wav'},
    {'name': 'block6/22-po-to-km-intensity.wav', 'path': 'block6/22-po-to-km-intensity.wav'},
    {'name': 'block6/23-pm-km-tm-intensity.wav', 'path': 'block6/23-pm-km-tm-intensity.wav'},
    {'name': 'block6/23-pa-km-tm-intensity.wav', 'path': 'block6/23-pa-km-tm-intensity.wav'},
    {'name': 'block6/24-pm-ko-tm-intensity.wav', 'path': 'block6/24-pm-ko-tm-intensity.wav'},
    {'name': 'block6/24-pmm-ko-tm-intensity.wav', 'path': 'block6/24-pmm-ko-tm-intensity.wav'},
    {'name': 'block6/25-km-tmm-pm-f0.wav', 'path': 'block6/25-km-tmm-pm-f0.wav'},
    {'name': 'block6/25-ki-tmm-pm-f0.wav', 'path': 'block6/25-ki-tmm-pm-f0.wav'},
    {'name': 'block6/26-km-pu-tm-f0.wav', 'path': 'block6/26-km-pu-tm-f0.wav'},
    {'name': 'block6/26-ku-pu-tm-f0.wav', 'path': 'block6/26-ku-pu-tm-f0.wav'},
    {'name': 'block6/27-tm-km-pm-intensity.wav', 'path': 'block6/27-tm-km-pm-intensity.wav'},
    {'name': 'block6/27-tmm-km-pm-intensity.wav', 'path': 'block6/27-tmm-km-pm-intensity.wav'},
    {'name': 'block6/28-ki-pm-tm-intensity.wav', 'path': 'block6/28-ki-pm-tm-intensity.wav'},
    {'name': 'block6/28-km-pm-tm-intensity.wav', 'path': 'block6/28-km-pm-tm-intensity.wav'},
    {'name': 'block6/29-kmm-ta-pm-f0.wav', 'path': 'block6/29-kmm-ta-pm-f0.wav'},
    {'name': 'block6/29-km-ta-pm-f0.wav', 'path': 'block6/29-km-ta-pm-f0.wav'},
    {'name': 'block6/30-po-tmm-km-intensity.wav', 'path': 'block6/30-po-tmm-km-intensity.wav'},
    {'name': 'block6/30-pm-tmm-km-intensity.wav', 'path': 'block6/30-pm-tmm-km-intensity.wav'},
    {'name': 'block6/31-ki-ti-pm-f0.wav', 'path': 'block6/31-ki-ti-pm-f0.wav'},
    {'name': 'block6/31-km-ti-pm-f0.wav', 'path': 'block6/31-km-ti-pm-f0.wav'},
    {'name': 'block6/32-pa-km-tm-f0.wav', 'path': 'block6/32-pa-km-tm-f0.wav'},
    {'name': 'block6/32-pm-km-tm-f0.wav', 'path': 'block6/32-pm-km-tm-f0.wav'},
    {'name': 'block6/33-ta-pmm-km-f0.wav', 'path': 'block6/33-ta-pmm-km-f0.wav'},
    {'name': 'block6/33-tm-pmm-km-f0.wav', 'path': 'block6/33-tm-pmm-km-f0.wav'},
    {'name': 'block6/34-kmm-pe-tm-intensity.wav', 'path': 'block6/34-kmm-pe-tm-intensity.wav'},
    {'name': 'block6/34-km-pe-tm-intensity.wav', 'path': 'block6/34-km-pe-tm-intensity.wav'},
    {'name': 'block6/35-pa-ta-km-intensity.wav', 'path': 'block6/35-pa-ta-km-intensity.wav'},
    {'name': 'block6/35-pm-ta-km-intensity.wav', 'path': 'block6/35-pm-ta-km-intensity.wav'},
    {'name': 'block6/36-pm-kmm-tm-intensity.wav', 'path': 'block6/36-pm-kmm-tm-intensity.wav'},
    {'name': 'block6/36-pmm-kmm-tm-intensity.wav', 'path': 'block6/36-pmm-kmm-tm-intensity.wav'},
    {'name': 'block6/37-pm-ki-tm-intensity.wav', 'path': 'block6/37-pm-ki-tm-intensity.wav'},
    {'name': 'block6/37-pi-ki-tm-intensity.wav', 'path': 'block6/37-pi-ki-tm-intensity.wav'},
    {'name': 'block6/38-km-tmm-pm-f0.wav', 'path': 'block6/38-km-tmm-pm-f0.wav'},
    {'name': 'block6/38-ko-tmm-pm-f0.wav', 'path': 'block6/38-ko-tmm-pm-f0.wav'},
    {'name': 'block6/39-pm-tu-km-intensity.wav', 'path': 'block6/39-pm-tu-km-intensity.wav'},
    {'name': 'block6/39-pmm-tu-km-intensity.wav', 'path': 'block6/39-pmm-tu-km-intensity.wav'},
    {'name': 'block6/40-pm-tm-km-intensity.wav', 'path': 'block6/40-pm-tm-km-intensity.wav'},
    {'name': 'block6/40-pu-tm-km-intensity.wav', 'path': 'block6/40-pu-tm-km-intensity.wav'},
    {'name': 'block6/41-tm-ko-pm-f0.wav', 'path': 'block6/41-tm-ko-pm-f0.wav'},
    {'name': 'block6/41-to-ko-pm-f0.wav', 'path': 'block6/41-to-ko-pm-f0.wav'},
    {'name': 'block6/42-pm-tmm-km-intensity.wav', 'path': 'block6/42-pm-tmm-km-intensity.wav'},
    {'name': 'block6/42-pu-tmm-km-intensity.wav', 'path': 'block6/42-pu-tmm-km-intensity.wav'},
    {'name': 'block6/43-tm-pi-km-f0.wav', 'path': 'block6/43-tm-pi-km-f0.wav'},
    {'name': 'block6/43-tmm-pi-km-f0.wav', 'path': 'block6/43-tmm-pi-km-f0.wav'},
    {'name': 'block6/44-km-tm-pm-f0.wav', 'path': 'block6/44-km-tm-pm-f0.wav'},
    {'name': 'block6/44-ko-tm-pm-f0.wav', 'path': 'block6/44-ko-tm-pm-f0.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var welcome_key;
var block_breakClock;
var break_text;
var break_key;
var trialClock;
var text;
var text_2;
var key_resp;
var endClock;
var end_text;
var end_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: '歡迎參加本實驗\n\n您將聆聽一系列成對音檔 (A 和 B)\n請根據您的感受，按下對應數字鍵回答：\n\n(1) 只有 A 自然\n(2) 只有 B 自然\n(3) A 和 B 都自然\n(4) A 和 B 都不自然\n\n按【空白鍵】開始',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_break"
  block_breakClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  break_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.045,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '實驗結束，感謝您的參與！\n\n按任意鍵離開',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcomeMaxDurationReached;
var _welcome_key_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    welcome_key.keys = undefined;
    welcome_key.rt = undefined;
    _welcome_key_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(welcome_key);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }
    
    
    // if welcome_text is active this frame...
    if (welcome_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *welcome_key* updates
    if (t >= 0.0 && welcome_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_key.tStart = t;  // (not accounting for frame time here)
      welcome_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_key.clearEvents(); });
    }
    
    // if welcome_key is active this frame...
    if (welcome_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _welcome_key_allKeys = _welcome_key_allKeys.concat(theseKeys);
      if (_welcome_key_allKeys.length > 0) {
        welcome_key.keys = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].name;  // just the last key pressed
        welcome_key.rt = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].rt;
        welcome_key.duration = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcome_key.corr, level);
    }
    psychoJS.experiment.addData('welcome_key.keys', welcome_key.keys);
    if (typeof welcome_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcome_key.rt', welcome_key.rt);
        psychoJS.experiment.addData('welcome_key.duration', welcome_key.duration);
        routineTimer.reset();
        }
    
    welcome_key.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_blocks.xlsx',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blocks.forEach(function() {
      snapshot = blocks.getSnapshot();
    
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(block_breakRoutineBegin(snapshot));
      blocksLoopScheduler.add(block_breakRoutineEachFrame());
      blocksLoopScheduler.add(block_breakRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: block_file,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block_breakMaxDurationReached;
var _break_key_allKeys;
var block_breakMaxDuration;
var block_breakComponents;
function block_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_break' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    block_breakClock.reset();
    routineTimer.reset();
    block_breakMaxDurationReached = false;
    // update component parameters for each repeat
    break_text.setText(break_msg);
    break_key.keys = undefined;
    break_key.rt = undefined;
    _break_key_allKeys = [];
    psychoJS.experiment.addData('block_break.started', globalClock.getTime());
    block_breakMaxDuration = null
    // keep track of which components have finished
    block_breakComponents = [];
    block_breakComponents.push(break_text);
    block_breakComponents.push(break_key);
    
    block_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function block_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_break' ---
    // get current time
    t = block_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }
    
    
    // if break_text is active this frame...
    if (break_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *break_key* updates
    if (t >= 0.0 && break_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_key.tStart = t;  // (not accounting for frame time here)
      break_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break_key.clearEvents(); });
    }
    
    // if break_key is active this frame...
    if (break_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = break_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _break_key_allKeys = _break_key_allKeys.concat(theseKeys);
      if (_break_key_allKeys.length > 0) {
        break_key.keys = _break_key_allKeys[_break_key_allKeys.length - 1].name;  // just the last key pressed
        break_key.rt = _break_key_allKeys[_break_key_allKeys.length - 1].rt;
        break_key.duration = _break_key_allKeys[_break_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_break' ---
    block_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('block_break.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(break_key.corr, level);
    }
    psychoJS.experiment.addData('break_key.keys', break_key.keys);
    if (typeof break_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('break_key.rt', break_key.rt);
        psychoJS.experiment.addData('break_key.duration', break_key.duration);
        routineTimer.reset();
        }
    
    break_key.stop();
    // the Routine "block_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var sound_1;
var sound_2;
var sound_1_played;
var sound_2_played;
var _key_resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(trial_label);
    // Run 'Begin Routine' code from code_2
    sound_1 = new ps_sound.Sound(sound1, {"sampleRate": 44100, "stereo": true, "hamming": true});
    sound_2 = new ps_sound.Sound(sound2, {"sampleRate": 44100, "stereo": true, "hamming": true});
    sound_1_played = false;
    sound_2_played = false;
    
    text_2.setText(choices_text);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text);
    trialComponents.push(text_2);
    trialComponents.push(key_resp);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from code_2
    t = routineTimer.getTime();
    if (((t >= 1.0) && (! sound_1_played))) {
        sound_1.play();
        sound_1_played = true;
    }
    if (((t >= 2.5) && (! sound_2_played))) {
        sound_2.play();
        sound_2_played = true;
    }
    
    
    // *text_2* updates
    if (t >= 3.5 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 3.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['1','2','3','4'] === 'string' ? [['1','2','3','4']] : ['1','2','3','4'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    sound_1.stop();
    sound_2.stop();
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var _end_key_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    end_key.keys = undefined;
    end_key.rt = undefined;
    _end_key_allKeys = [];
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_key);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    
    // if end_text is active this frame...
    if (end_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *end_key* updates
    if (t >= 0.0 && end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key.tStart = t;  // (not accounting for frame time here)
      end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key.clearEvents(); });
    }
    
    // if end_key is active this frame...
    if (end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key.getKeys({
        keyList: typeof [] === 'string' ? [[]] : [], 
        waitRelease: false
      });
      _end_key_allKeys = _end_key_allKeys.concat(theseKeys);
      if (_end_key_allKeys.length > 0) {
        end_key.keys = _end_key_allKeys[_end_key_allKeys.length - 1].name;  // just the last key pressed
        end_key.rt = _end_key_allKeys[_end_key_allKeys.length - 1].rt;
        end_key.duration = _end_key_allKeys[_end_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_key.corr, level);
    }
    psychoJS.experiment.addData('end_key.keys', end_key.keys);
    if (typeof end_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_key.rt', end_key.rt);
        psychoJS.experiment.addData('end_key.duration', end_key.duration);
        routineTimer.reset();
        }
    
    end_key.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
