package com.example.demo.service;

import com.example.demo.model.AdMetrics;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

@Service
public class AdMetricsService {
    Collection<AdMetrics> adMetricsData;

    public AdMetricsService() {
        adMetricsData = new ArrayList<>(Arrays.asList(
                new AdMetrics("Cat food", 50, 1000, new String[]{"pets", "cats", "pet food", "cat food", "discount"}, 54, 6245),
                new AdMetrics("Dog toys", 75, 1500, new String[]{"pets", "dogs", "dog toys", "chew toys", "discount"}, 12, 4678),
                new AdMetrics("Organic Snacks", 100, 5000, new String[]{"food", "organic", "healthy", "sale"}, 89, 8921),
                new AdMetrics("Running Shoes", 200, 2500, new String[]{"sports", "running", "shoes", "fitness", "discount"}, 27, 3137),
                new AdMetrics("Smartphones", 300, 8000, new String[]{"electronics", "smartphones", "mobile", "sale"}, 63, 7542),
                new AdMetrics("Laptops", 150, 3500, new String[]{"electronics", "computers", "laptops", "technology", "discount"}, 5, 4029),
                new AdMetrics("Luxury Watches", 50, 1200, new String[]{"fashion", "watches", "luxury", "accessories", "premium"}, 41, 5386),
                new AdMetrics("Home Decor", 125, 4000, new String[]{"home", "furniture", "interior"}, 76, 8473),
                new AdMetrics("Fitness Equipment", 80, 2200, new String[]{"fitness", "gym", "workout"}, 33, 5948),
                new AdMetrics("Gardening Tools", 60, 1800, new String[]{"home", "gardening", "tools", "plants", "sale"}, 18, 2795),
                new AdMetrics("Book Collection", 90, 1300, new String[]{"books", "reading", "literature", "novels", "discount"}, 92, 8734),
                new AdMetrics("Yoga Mats", 110, 2000, new String[]{"fitness", "yoga", "mats", "exercise", "discount"}, 7, 6367),
                new AdMetrics("Bicycles", 95, 2800, new String[]{"sports", "bicycles", "cycling", "outdoors", "sale"}, 60, 4211),
                new AdMetrics("Gaming Consoles", 250, 5000, new String[]{"electronics", "gaming", "consoles", "video games", "discount"}, 38, 5789),
                new AdMetrics("Kitchen Appliances", 180, 3400, new String[]{"home", "kitchen", "appliances", "cooking", "sale"}, 83, 9056),
                new AdMetrics("Sunglasses", 70, 1600, new String[]{"fashion", "accessories", "sunglasses", "style", "discount"}, 20, 3289),
                new AdMetrics("Mountain Gear", 130, 2900, new String[]{"outdoors", "mountain", "gear", "adventure", "sale"}, 46, 7165),
                new AdMetrics("Hair Care Products", 140, 2700, new String[]{"beauty", "hair", "care", "shampoo", "discount"}, 14, 5697),
                new AdMetrics("Smart Home Devices", 210, 4500, new String[]{"electronics", "smart home", "devices", "automation", "sale"}, 71, 4321),
                new AdMetrics("Travel Backpacks", 160, 3200, new String[]{"travel", "backpacks", "luggage", "adventure", "discount"}, 3, 8210),
                new AdMetrics("Electric Scooters", 190, 4100, new String[]{"transportation", "electric", "scooters", "eco-friendly"}, 57, 3784)
        ));
    }

    public Collection<AdMetrics> getMetricsData() {
        return adMetricsData;
    }

    public void createAdMetrics(AdMetrics adMetrics) {
        adMetricsData.add(adMetrics);
    }

    public Optional<AdMetrics> getAdMetricsById(String id) {
        return adMetricsData.stream()
                .filter(adMetrics -> adMetrics.getId().equals(id))
                .findFirst();
    }

    public boolean deleteAdMetricsById(String id) {
        Optional<AdMetrics> adMetricsToDelete = getAdMetricsById(id);

        if (adMetricsToDelete.isEmpty()) {
            return false;
        }

        adMetricsData.remove(adMetricsToDelete.get());
        return true;
    }

    public boolean updateAdMetrics(AdMetrics adMetrics) {
        Optional<AdMetrics> adMetricsToUpdate = getAdMetricsById(adMetrics.getId());

        if (adMetricsToUpdate.isEmpty()) {
            return false;
        }

        adMetricsToUpdate.get().setAdName(adMetrics.getAdName());
        adMetricsToUpdate.get().setViews(adMetrics.getViews());
        adMetricsToUpdate.get().setClicks(adMetrics.getClicks());
        adMetricsToUpdate.get().setTags(adMetrics.getTags());
        adMetricsToUpdate.get().setBought(adMetrics.getBought());

        return true;
    }
}