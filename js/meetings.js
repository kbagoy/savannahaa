      google.load("visualization", "1.1", {packages:["table"]});
      google.setOnLoadCallback(drawDateFormatTable);

      function drawDateFormatTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Day & Time');
        data.addColumn('string', 'Meeting Name (Code)');
        data.addColumn('string', 'Neighborhood');
        data.addColumn('string', 'Location');
        data.addColumn('boolean', 'Accessible');
        data.addRows([
          [new Date(1970, 1, 1, 7, 30), 'Early Bird Group (o)', 'Midtown', '<a href="https://www.google.com/maps/place/1501+Eisenhower+Dr,+Savannah,+GA+31406/@32.0047283,-81.0962474,17z/data=!3m1!4b1!4m2!3m1!1s0x88fb75c912afa1b3:0x54833744a0e1d722" target="_blank">24-Hour Club - 1501 Eisenhower Drive, Savannah</a>', true],
          [new Date(1970, 1, 1, 9, 00), 'Womens Step Study (x, ss)', 'Midtown', '<a href="https://www.google.com/maps/place/1501+Eisenhower+Dr,+Savannah,+GA+31406/@32.0047283,-81.0962474,17z/data=!3m1!4b1!4m2!3m1!1s0x88fb75c912afa1b3:0x54833744a0e1d722" target="_blank">24-Hour Club - 1501 Eisenhower Drive, Savannah</a>', true],
          [new Date(1970, 1, 1, 12, 30), 'High Noon Group (o, c)', 'Midtown', '<a href="https://www.google.com/maps/place/1501+Eisenhower+Dr,+Savannah,+GA+31406/@32.0047283,-81.0962474,17z/data=!3m1!4b1!4m2!3m1!1s0x88fb75c912afa1b3:0x54833744a0e1d722" target="_blank">24-Hour Club - 1501 Eisenhower Drive, Savannah</a>', true],
          [new Date(1970, 1, 1, 16, 00), 'Mens Meeting (x, m)', 'Midtown', '<a href="https://www.google.com/maps/place/1501+Eisenhower+Dr,+Savannah,+GA+31406/@32.0047283,-81.0962474,17z/data=!3m1!4b1!4m2!3m1!1s0x88fb75c912afa1b3:0x54833744a0e1d722" target="_blank">24-Hour Club - 1501 Eisenhower Drive, Savannah</a>', true],
          [new Date(1970, 1, 1, 18, 00), 'New Womens Group (x, w)', 'Midtown', '<a href="https://www.google.com/maps/place/1501+Eisenhower+Dr,+Savannah,+GA+31406/@32.0047283,-81.0962474,17z/data=!3m1!4b1!4m2!3m1!1s0x88fb75c912afa1b3:0x54833744a0e1d722" target="_blank">24-Hour Club - 1501 Eisenhower Drive, Savannah</a>', true],
          [new Date(1970, 1, 1, 21, 00),'Easy Does It Group (x, o)', 'Midtown', '<a href="https://www.google.com/maps/place/1501+Eisenhower+Dr,+Savannah,+GA+31406/@32.0047283,-81.0962474,17z/data=!3m1!4b1!4m2!3m1!1s0x88fb75c912afa1b3:0x54833744a0e1d722" target="_blank">24-Hour Club - 1501 Eisenhower Drive, Savannah</a>', false]
        ]);

        //Date Format(year, month, day, hour (24 Hour), minutes);
        //Jan 1 1970 is sunday, therefore 1970, 1, 1, 13, 15 is reformatted to 'Sunday 1:15PM'

        // Create three formatters in three styles.
        var formatter = new google.visualization.DateFormat({pattern: "EEEE h':'mm aa"});

        // Reformat our data.
        formatter.format(data, 0);

        // Draw our data
        var table = new google.visualization.Table(document.getElementById('dateformat_div'));
        table.draw(data, {showRowNumber: false, width: '100%', height: '100%', allowHtml: true});


      }

//Dev NOTE: Attempt to Redo this using spreadsheet as source
