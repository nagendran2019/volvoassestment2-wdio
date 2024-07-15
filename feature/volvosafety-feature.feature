Feature: Image comparison for slider with icons

  Scenario: Compare images of the sliderWithIcons:icon2 section
    Given I am on the Volvo Cars safety highlights page
    When I navigate to the sliderWithIcons:icon2 section
    Then I take a screenshot and compare it with the baseline image

  Scenario: Compare images of the sliderWithIcons:icon2 section
    Given I am on the Volvo Cars safety highlights page
    When I navigate to the sliderWithIcons:icon2 section
    Then I should see the inner text matches string