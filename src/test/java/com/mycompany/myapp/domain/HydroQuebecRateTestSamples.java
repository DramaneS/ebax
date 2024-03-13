package com.mycompany.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class HydroQuebecRateTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static HydroQuebecRate getHydroQuebecRateSample1() {
        return new HydroQuebecRate().id(1L).name("name1");
    }

    public static HydroQuebecRate getHydroQuebecRateSample2() {
        return new HydroQuebecRate().id(2L).name("name2");
    }

    public static HydroQuebecRate getHydroQuebecRateRandomSampleGenerator() {
        return new HydroQuebecRate().id(longCount.incrementAndGet()).name(UUID.randomUUID().toString());
    }
}
