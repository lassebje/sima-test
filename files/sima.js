var riflextask = riflex.createRIFLEXTask()
riflextask.name = "RIFLEXTask"

var initial = riflextask.initialCondition
initial.name = "Initial"


var riflexmodel = riflextask.model

var location = riflexmodel.location
location.name = "location"

var initialviewpoint = location.initialViewpoint

var point3 = initialviewpoint.eye
point3.x = -1.0


var vector3 = initialviewpoint.dir
vector3.x = 1.0


var vector3_2 = initialviewpoint.up
vector3_2.z = 1.0




var seasurface = location.seaSurface
seasurface.sizeX = 1000.0
seasurface.sizeY = 1000.0
seasurface.z = 0.0

var simacolor = seasurface.color
simacolor.red = 0.0
simacolor.blue = 0.7



var flatbottom = sima.createFlatBottom()
flatbottom.sizeX = 1000.0
flatbottom.sizeY = 1000.0
flatbottom.z = -1000.0

var simacolor_2 = flatbottom.color
simacolor_2.red = 0.7
simacolor_2.green = 0.7
simacolor_2.blue = 0.7


location.flatBottom = flatbottom



var simostaticcalculationparameters = riflexmodel.getSIMOStaticCalculationParameters();

var equilibriumgriddefinition = simostaticcalculationparameters.equilibriumGridDefinition





var simodynamiccalculationparameters = riflexmodel.getSIMODynamicCalculationParameters();
simodynamiccalculationparameters.timeStep = 0.1






var riflexstaticcalculationparameters = riflexmodel.riflexStaticCalculationParameters

var staticloadtypeitem = riflex.createStaticLoadTypeItem()

riflexstaticcalculationparameters.loadTypeItems.add(staticloadtypeitem)

var staticloadtypeitem_2 = riflex.createStaticLoadTypeItem()
setValue(staticloadtypeitem_2, "loadType", "Specified Displacements")

riflexstaticcalculationparameters.loadTypeItems.add(staticloadtypeitem_2)

var parametervariation = riflex.createParameterVariation()

var offsetvariationitem = riflex.createOffsetVariationItem()

parametervariation.offsetVariation = offsetvariationitem

var currentvariationitem = riflex.createCurrentVariationItem()

parametervariation.currentVariation = currentvariationitem

var boundarychangegroup = riflex.createBoundaryChangeGroup()

parametervariation.boundaryChangeGroup = boundarychangegroup

riflexstaticcalculationparameters.parameterVariation = parametervariation


var riflexdynamiccalculationparameters = riflexmodel.riflexDynamicCalculationParameters


var irregularresponseanalysis = riflexdynamiccalculationparameters.irregularResponseAnalysis




var timedomainprocedure = riflexdynamiccalculationparameters.timeDomainProcedure

var nonlinearforcemodel = timedomainprocedure.nonLinearForceModel

var slugforcespecification = riflex.createSlugForceSpecification()

nonlinearforcemodel.slugForceSpecification = slugforcespecification










var sumforceresponsestorage = riflex.createSumForceResponseStorage()

riflexdynamiccalculationparameters.sumForceResponseStorage = sumforceresponsestorage









var regularwaveanalaysis = riflex.createRegularWaveAnalaysis()

riflexdynamiccalculationparameters.regularWaveAnalysis = regularwaveanalaysis

var regularwaveloading = riflex.createRegularWaveLoading()

riflexdynamiccalculationparameters.regularWaveLoading = regularwaveloading





