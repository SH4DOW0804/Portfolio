// Configurações do Script
var doc = app.activeDocument;

// Aumentar Saturação
var idHueSaturation = stringIDToTypeID("hueSaturation");
var desc1 = new ActionDescriptor();
var idNull = charIDToTypeID("null");
var ref1 = new ActionReference();
ref1.putEnumerated(charIDToTypeID("adjustmentLayer"), charIDToTypeID("ordinal"), charIDToTypeID("targetEnum"));
desc1.putReference(idNull, ref1);
var idPresetKind = stringIDToTypeID("presetKind");
var idPresetKindType = stringIDToTypeID("presetKindType");
var idPresetKindDefault = stringIDToTypeID("presetKindDefault");
desc1.putEnumerated(idPresetKind, idPresetKindType, idPresetKindDefault);
executeAction(idHueSaturation, desc1, DialogModes.NO);

// Desfoque de Movimento
var idMotionBlur = stringIDToTypeID("motionBlur");
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(charIDToTypeID("Angl"), charIDToTypeID("#Ang"), 45); // Ângulo do desfoque
desc2.putUnitDouble(charIDToTypeID("Dstn"), charIDToTypeID("#Pxl"), 10); // Distância do desfoque
executeAction(idMotionBlur, desc2, DialogModes.NO);

// Adicionar Grão
var idAddNoise = stringIDToTypeID("addNoise");
var desc3 = new ActionDescriptor();
desc3.putUnitDouble(charIDToTypeID("Amnt"), charIDToTypeID("#Prc"), 5); // Quantidade de grão
desc3.putEnumerated(charIDToTypeID("Dstr"), charIDToTypeID("Dstr"), charIDToTypeID("Gauss")); // Tipo de distribuição (Gaussiana)
desc3.putBoolean(charIDToTypeID("Mnch"), false); // Monocromático
executeAction(idAddNoise, desc3, DialogModes.NO);

// Configurações de Camadas
doc.activeLayer = doc.artLayers.getByName("Camada 0");
