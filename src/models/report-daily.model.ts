import { DiscreteGlucoseReadingSource } from "./enum/discreate-glucose-reading-source.enum";
import { DiscreteGlucoseAnomalousValue } from "./enum/discrete-glucose-anomalous-value.enum";
import { GlucoseInRangeType } from "./enum/glucose-in-range-type.enum";

interface Total {
    total: number;
}

interface Data<T> {
    data: T;
}

interface BasalModeDay {
    value: string;
    startDate: string;
    endDate: string;
}

interface BolusDay {
    value: number;
    isValueDisplayed: boolean;
    extendedType: string;
    overrideType: string;
    causeType: string;
    date: string;
    displayedDate: string;
}

interface CarbsDay {
    value: number;
    date: string;
    displayedDate: string;
}
interface ContinuousGlucoseDataPoint {
    value: number;
    date: string;
}

interface DiscreteGlucoseDataPointDto {
    value?: number;
    anomalousValue?: DiscreteGlucoseAnomalousValue;
    source: DiscreteGlucoseReadingSource;
    plottedValue: number;
    date: string;
    inRangeType: GlucoseInRangeType;
}

interface GlucoseDay {
    continuousData: ContinuousGlucoseDataPoint[][];
    discreteData: DiscreteGlucoseDataPointDto[];
}

interface PodChangeDataPoint {
    deactivatedDate?: string;
    activatedDate?: string;
    isDeactivatedDateEstimated?: boolean;
    displayedStartDate: string;
    displayedEndDate: string;
    isIconDisplayed: boolean;
}

interface TargetGlucoseDate {
    startDate: string;
    endDate: string;
    value: number;
}

interface DeviceUtcOffsetDayDto {
    doesChange: boolean;
}

export interface Daily {
    basal: Total;
    basalMode: Data<BasalModeDay[]>;
    basalSubmode: Data<BasalModeDay>[];
    bolus: Total & Data<BolusDay[][]>;
    carbs: Total & Data<CarbsDay[][]>;
    date: string;
    glucose: GlucoseDay;
    hasData: boolean;
    podChange: Data<PodChangeDataPoint[]>;
    targetGlucose: Data<TargetGlucoseDate[]>;
    utcOffset: DeviceUtcOffsetDayDto;
}
